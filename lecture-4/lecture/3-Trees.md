# What are binary trees?

A directed acyclic graph where each node at most has two children, usually called left and right child.

Node: basic unit in a tree, containing a value and pointers to its children

Root: the unique, highest node (no parent)

Leaf: a node with zero children

Internal Node: a node with at least one child

Depth (d) of a node: number of edges from the root to that node

Height (h) of a node


Maximum number of elements in a Binary Tree: 2^n - 1
Height of 1 -> 2^1 - 1 -> 2 - 1 => 1
Height of 2 -> 2^2 - 1 -> 4 - 1 => 3
Height of 3 -> 2^3 - 1 -> 8 - 1 => 7


Full Binary Tree: will contain the maximum number of nodes given it's height

### Binary Search Tree (BST)
In a binary search tree, every node:
    - All the values in the left "subtree" < the node's value
    - All the values in the right "subtree" > the node's value


## Core operations

Opertion            Average case        Notes
Search              O(log n)
Insert              O(log n)
Delete              O(log n)
Traversal           O(n)                    Pre-order traversal, post-order traversal, in-order traversal, level-order traversal


Pre-order traversal: 7, 3, 1, 5, 10, 8, 11
Post-order traversal: 1, 5, 3, 8, 11, 10, 7

## Balancing a binary search tree

Reference to be shared

