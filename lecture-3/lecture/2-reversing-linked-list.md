# Problem: You have a linked list where each node points to the next. Reverse the linked list so that the head becomes the tail and vice versa -- you must not create new nodes.

"To perform an operation in-place"

Example:

Input: 1 -> 2 -> 3 -> 4
Output: 4 -> 3 -> 2 -> 1

## The implementation

### Intuition

- In order to perform a linked list reversal in place, we will use multiple "pointers."

```js

/**
 * reverseList - reverse a "singly" linked list in place
 * @param {ListNode | null} head The head of the list
 * @returns { LinkedList | null } New head of the reversed linked list
 */
 // Iterative approach
 function reverseList(head) {
    let prev = null;
    let curr = head;

    // if curr is equal to null, I've reached the "tail" node
    while(curr != null) {
        // Keep track of the "next" node
        const nextNode = curr.next;

        // Reverse the pointer; current node will point to the previous node
        curr.next = prev;

        prev = curr;
        curr = nextNode;
    }
    return prev;
 }

 Complexity
    - Time: O(n) - each node is visited once
    - Space: O(1)

```

## Variations

- Doubly Linked List Reversal
- Reverse in groups of K - reverse certain chunks of the linked list