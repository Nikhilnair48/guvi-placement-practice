# Search and sort index

## Problem statement

You're adding product browsing capability to your store:

Route:
`GET /products?category=shoes&sort=price:asc&page=3&limit=20&q=black`

Requirements:

- Filter by category
- Optional text filter on the product name
- Sort option on price (asc or desc)
- Pagination (page number & page size)
- Indexing on __
- Return the minimal fields: _id, name, price

Success:
- Choosing an index order that matches the incoming queries
- Explain how pagination interacts with this collection & index
- Avoid scans because it impacts performance

## Approach

Step 1 - case-insenstitive query
Add a "nameLower" field written on save

Step 2 - choose indexes
A) Not having the query: compound index that support filter + sort + paginate
{ category: 1, price: 1, _id: 1 }

B) With a query: filter category, search nameLower
{ category: 1, nameLower: 1, _id: 1}

Step 3 - pagination
- skip/limit to paginate

```js
    // Product.js
    import mongoose from "mongoose";
    import { ObjectId }  from mongoose.Schema.Types;

    const ProductSchema = new mongoose.Schema({
        // _id: { type: ObjectId }
        name: { type: String, required: true },
        nameLower: { type: String, required: true, index: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
    });

    ProductSchema.pre('save', function(next) {
        if(this.isModified("name")) {
            this.nameLower = this.name.toLowerCase();
        }
        next();
    });

    export default mongoose.model("Product", ProductSchema);
```

```js
// Create index - will need to add some references

// 1) Compound index: primary browsing patterns: filter by category, sort by price
db.products.createIndex({ category: 1, price: 1, _id: 1 });

// 2) Prefix search pattern: category + query related to nameLower
db.products.createIndex({ category: 1, nameLower: 1, _id: 1 });

```

```js
    // GET /products?category=shoes&sort=price:asc&page=3&limit=20
    // GET /products?category=shoes&q=nike&sort=price:asc&page=3&limit=20
    function getProducts(req, res) {
        const { category, sort = "price:asc", page = 1, limit = 20, q = "" }= req.query;
        // ["price", "asc"]
        const [sortField, sortDirStr] = sort.split(":");
        // ternary operator
        const sortDir = sortDirStr === "desc" ? -1 : 1;

        // template literal
        const nameFilter = q ? { nameLower: { $regex: `^${q}` }} : {};

        const cursor = Product.find({ category, ...nameFilter })
            // _id is the secondary sort field in case two or more products have exactly the same price
            .sort({ price: sortDir, _id: sortDir })
            // page: 1
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .select({ name: 1, price: 1 });

        const rows = await cursor;
        res.json(rows);
    }

    

```