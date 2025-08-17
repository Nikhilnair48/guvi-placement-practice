# Inventroy-safe order creation

## Problem statement

Build `POST /orders` for a store. Each order contains one or more items `{ productId, qty }`.

### Requirements

Reduce each product's stock and never oversell under concurrent requests.

Return:
    - 201 with the created order when all items can be fulfilled
    - 409 when any item lacks stock (no partial orders)

Note: what is concurrency?
    - ability of a program or system to make progress on multiple tasks simultaneously
    - if not handled correctly, can result in race condition. Others include deadlocks

## Approach

### What you don't want to do...

- findById() -> check `stock` -> save() new order

### Better approach...

- Use `findOneAndUpdate()` with a guard:
    - { _id: productId, stock: { $gte: qty } }
        - if returns null, we don't have the stock. Return 409

### Best approach for multi-item orders...

- Transactions wtih a session:
    - Start a session -> `withTransaction`
    - For each item, do the guarded checks and decrease stock


## Implementation

### Models

```js
    // Product.js
    import mongoose from "mongoose";
    import { ObjectId }  from mongoose.Schema.Types;

    const ProductSchema = new mongoose.Schema({
        // _id: { type: ObjectId }
        name: { type: String, required: true },
        stock: { type: Number, required: true, min: 0 },
    })
    export default mongoose.model("Product", ProductSchema);

    // Order.js
    const ItemSchema = new mongoose.Schema({
        productId: { type: ObjectId, ref: "Product", required: true },
        qty: { type: Number, required: true, min: 1 },
    });
    const OrderSchema = new mongoose.Schema({
        items: { type: [ItemSchema], required: true, validate: (items) => items.length > 0 },
        createdAt: { type: Date, default: Date.now }
    });

    export default mongoose.model("Order", OrderSchema);

```

### Controller & service implementation

```js
/**
 * POST /orders
 * Body: { items: [ { productId, qty }, { productId, qty } ] }
 */
import express from "express";
import mongoose from "mongoose";
import Product from "./models/Product";
import Order from "./models/Order";

const router = express.Router();

router.post("/orders", async (req, res, next) => {
    const { items } = req.body;
    if(!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: "items[] required" });
    }

    const session = await mongoose.startSession();
    try {
        let ok = true;
        let updatedProducts = [];
        await session.withTransaction(async () => {
            // decrement each product if stock is sufficient
            for(const { productId, qty } of items) {
                const updated = await Product.findOneAndUpdate(
                    { _id: productId, stock: { $gte: qty } },
                    // 10 + (-5) => 5
                    { $inc: { stock: -qty } },
                    { new: true, session }
                );
                if(!updated) {
                    ok = false;
                    throw new Error("Insufficient stock");
                }
                updatedProducts.push(updated);
            }
            // if we got here, all the decrements succeeded; create order now
            await Order.create([ { items } ], { session });
        });

        if(!ok) {
            return res.status(409).json({ error: "Insufficient stock" });
        }

        const createdOrder = await Order.find().sort({ _id: -1}).limit(1);
        return res.status(200).json(createdOrder[0]);
    } catch(error) {

    } finally {
        session.endSession();
    }
})

```

### Test
```js
    await Promise.allSettled([
        fetch("/orders", { method: "POST", body: JSON.stringify({ productId: 1234, qty: 1 }) }),
        fetch("/orders", { method: "POST", body: JSON.stringify(
            { productId: 1234, qty: 1 },
            { productId: 2345, qty: 1 }) 
        })
    ])
```