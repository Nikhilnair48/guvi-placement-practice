# Binary Search

# What does binary search do?

Given a sorted array of n elements, binary search performs:
    - Starts in the middle of that array
    - If the middle element is the target, return
    - If not, you discard half of the array (left half or the right half), depending on whether the target is smaller or larger
    - Repeat this halving on the remaining half

const array = [2,4,7,10,13,18,21]
target: 13

left = 0
right = 6
mid;

Step 1: midpoint - Math.floor((0 + 6) / 2) = 3 <-- mid
array[mid] = 10
Step 2: compare - 10 < 13 -> true
Step 3 - Update left & right
left = mid + 1 = 4
right = 6

Step 4: midpoint - Math.floor((4 + 6) / 2) = 5 <-- mid
array[mid] = 18
Step 5: compare - 18 > 13 -> true
Step 6 - Update left & right
left = 4
right = mid - 1 = 4

Step 7: midpoint - Math.floor((4 + 4) / 2) = 4 <-- mid
array[mid] = 13
Found the target at index 4!


```js
    // const array = [2,4,7,10,13,18,21]
    function binarySearch(array, target) {
        // if array.length == 0, throw error or return -1

        let left = 0;
        let right = array.length;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);

            // Have we found the target at midpoint?
            if(array[mid] === target) return mid;

            // if midpoint is less than the target, we'll search in the right half
            if(array[mid] < target) {
                left = mid + 1;
            } else {
                // if midpoint is greater than the target, we'll search in the left half
                right = mid - 1;
            }
        }
        // Target is not found
        return -1;
    }

    const array = [2,4,7,10,13,18,21]
    console.log(binarySearch(array, 13));

Time complexity:
    - Every step of binary search cuts the problem size in half
        - Start: n elements
        - After 1 step: n/2 elements to search
        - After 2 steps: n/4 elements to search
        - After S steps: n/2^k elements to search
    - log of size of the array -> if the size of the array is n, binary search will take O(log n)
Space complexty: O(1)
```