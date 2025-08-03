# What is a Stack?

A stack is linear data structure that follows the Last-In, First-Out (LIFA) principle.

Image a stack of plates:
    - you place new plates on top (push)
    - you can remove the places from the top (pop)

Core Opertions of a Stack

    * push(element) -> void
        Adds an element to the top of the stack
    * pop() -> element
        remove and return the top element
    * peek -> element
        return (not does not remove) the top element
    * isEmpty() -> bool
        Check whether the stack has any elements
    * size() -> n
        Returns the number of elements on the stack

## How can a stack be implement?
    * Array-based stack
    * Linked-List stack  

## Use cases in the real world
    * History in our browser uses a Stack
    * Undo/Redo: actions where you push onto an stack - undo stack
    * Call stack: each function call pushed a frame onto the stack


# Implementation of Stack

```js
    class Stack {
        constructor() {
            this._items = [];
        }

        push(element) {
            if(!element) {
                throw new Error("Element invalid");
            }

            this._items.push(element);
        }

        pop() {
            if(this.isEmpty()) {
                throw new Error("Stack is empty");
            }
            return this._items.pop();
        }

        peek() {
            if(this.isEmpty()) {
                return null;
            }
            return this._items[this._items.length - 1];
        }

        isEmpty() {
            return this._items.length === 0;
        }

        size() {
            return this._items.length;
        }
    }

// Usage of a stack
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());      // 2
console.log(stack.pop());       // 2
console.log(stack.isEmpty());  // false
```