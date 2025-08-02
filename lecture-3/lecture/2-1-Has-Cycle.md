## Cycle Detection in a Linked List

Problem: YOu're given the head of a single linked list. Determine whether the list contains a cycle, i.e, if you follow the `next` pointers forever, do you loop back or do you hit a `null` address?


## Approach 

We'll use a `slow` & a `fast` node

```js
/**
 * hasCycle - detect whether a single linked list contains a cycle
 * Approach: move the slow pointer by 1 and fast pointer by 2; if these pointers ever meet, there's a cycle
 */
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }
    return false;
}

```