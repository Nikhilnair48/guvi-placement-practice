# Recursion

Definition: a function calls itself to break a problem into smaller subproblems
Core components:
    - Base case: when to stop the recursion
    - Recursive case: how to reduce the problem in subproblems so that we reach the base case


```js
    function sayHello() {
        console.log("sayHello");
        sayHello();
    }
```

```js
    /*
    * sumArray - sum up the elements in a given array
    * @param array - array to sum
    * @param i - ith index in the array
    * @returns the sum of all elements
    */
    // [1,2,3], i = 0
    // 1 + sumArray([1,2,3], 1) - push new element on call stack
        // 2 + sumArray([1,2,3], 2) - push new element on call stack
            // 3 + sumArray([1,2,3], 3) - push new element on call stack
                // I have reached the end of the array! return 0
            // 3 + 0
        // 2 + 3
    // 1 + 5 => 6
    // Call Stack?
    function sumArray(array, i = 0) {
        // Base case
        if(i >= array.length) return 0;
        // Recursive case
        return array[i] + sumArray(array, i + 1);
    }

    Complexity:
        - Time: O(n)
        - Space: O(n)
            - you build up a call stack of depth n before we unwind
```
## Recusrive approach to reversing a linked list

```js
/**
 * reverseRecList - recursively reverse a linked list
 */
function reverseRecList(head) {
    // Base case
    if(!head || !head.next) return head;
    // Recursive case
    const newHead = reverseRecList(head.next);

    // How do we flip the pointer?
    head.next.next = head;
    head.next = null;
    // return the new head

    return newHead;
}
    Complexity:
        - Time:
        - Space:
```

## How can you write a recursive function to determine if a linked list has a cycle?