# 4. Patterns 101

## A) Sliding Window Pattern

### 1. Definition and intuition
    Maintain a running "window" over a contiguous subarray

### 2. When do we use this?
 - Problem:
    - Max sum of size K
        - Given an array of integers, what's the max sum of any K elements?
        - Eg: [1,3,2,7,5]; K = 2
    - Smallest subarray with sum >= S
        - Given an array of integers and a target S, find the smallest 'subarray' whose sum is greater than or equal to S
        - Eg: [1,3,2,7,5]; S = 10
            - 1 + 3 + 7 -> 11
            - 1 + 3 + 2 + 5 -> 11
            - 2 + 3 + 5 -> 10
            - 7 + 5 + 1 -> 13
            - 7 + 5 -> 12
            - 7 + 3 -> 10

```js
    /**
     * Finds the maximum sum of any contigous subarray of length K
     * 
     * arr - the input array of numbers
     * k - size of the subarray
     * return: the maximum subarray sum given length K
     * Sample input: [0,0,1,3,2,7,5]; k = 2
     *  max: 1 + 3 => 4
    */
   function maxSubarraySum(arr, k) {
        // Edge case: if k is greater than array length
        if(k > array.length) {
            throw new Error("Subarray size k cannot be greater than array length");
        }

        let sum = 0;
        let max = 0;

        // Step 1: calculate the sum of the first window of size k
        for(let i = 0; i < k; i++) {
            sum += arr[i];
        }

        // Initialize the max with the first window's sum
        max = sum;

        // Step 2: slide the window across the rest of the array
        for(let i = k; i < arr.length; i++) {
            sum += arr[i] - arr[i - k]; // 3 - 2 -> 1
            max = Math.max(max, sum);
        }
        return max;
   }

//    Example usage:
    const array = [1,4,2,10,23,3,1,0,20];
    const k = 4;
    console.log(maxSubarraySum(array, k));

```