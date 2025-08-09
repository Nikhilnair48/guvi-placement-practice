# Heaps

## What is heap?

- A heap is a complete binary tree stored in an array that enforces a heap-order:
    - Min-heap: the value of every node <= its children (root  is minimum)
    - Max-heap: the value of every node >= its children (root  is maximum)

- A heap is not Binary Search Tree: heap guarantees priority at the root

- Typical implementation of a heap is for "priority queue"
    - `insert(x)`, `top()`, `removeTop()`

## Core operations & complexity
- `push` (sift-up) -> O(log n)
- `pop` (sift-down) -> O(log n)
- `peek` -> O(1)
- Space -> O(n)

## JS Implementation notes

Note: a comparator is function that defines how two values should be compared; helped in ordering of elements
    - Returns:
        - Negative value when a should come before b
        - Zero if a and be are equal
        - Positive value if a should come after b

- No native heap. Use array + comparator `cmp(a,b)`
- Min <--> Max: swap the comparator (eg: `(a,b) => b-a` for max-heap)


## Common patterns

- Kth largest/smallest element
- Top-k frequently accessed elements (freq map + size-k heap)
- Merge K sorted arrays/lists