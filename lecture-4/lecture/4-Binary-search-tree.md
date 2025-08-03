# Implementation of BST

```js

/**
 * Definitino of a binary tree node
 */
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * BST implementation with insert, search and delete
 */
class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this.root = this._insertNode(this.root, val);
    }
    
    _insertNode(node, val) {
        // Base condition
        if(node === null) {
            return new TreeNode(val);
        }
        if(val < node.value) {
            node.left = this._insertNode(node.left, val);
        } else if(val > node.value) {
            node.right = this._insertNode(node.right, val);
        }

        return node;
    }

    search(value) {
        let node = this.root;
        while(node !== null) {
            if(value === node.val) return true;
            // Ternary operators
            node = value < node.value ? node.left : node.right;
        }
        return false;
    }

    delete(val) {
        this.root = this._deleteNode(this.root, val);
    }

    _deleteNode(node, val) {
        // Base case
        if(node === null) return null;

        if(val < node.val) {
            node.left = this._deleteNode(node.left, val);
        } else if(val > node.val) {
            node.right = this._deleteNode(node.right, val);
        } else {
            // lead node deletion
            if(node.left === null && node.right === null) {
                return null;
            }

            // if there's a right child, that becomes the new child
            if(node.left === null) {
                return node.right;
            }


            if(node.right === null) {
                return node.left;
            }

            // two children: replace w/ inorder successor (min in the right subtree)
            let successor = this._minValueNode(node.right);
            node.value = successor.value;
            node.right = this._deleteNode(node.right, successor.value);
        }
        return node;
    }
    _minValueNode(node) {
        while(node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
```