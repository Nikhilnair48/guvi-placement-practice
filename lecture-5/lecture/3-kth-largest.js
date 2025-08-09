/**
 * Find the kth largest element in an array
 * 
 * Problem statement: given an integer array, nums, and an integer k (1-based), return the kth largest element
 * 
 * Same input -> output:
 * nums = [3,2,1,5,6,4]; k = 2 -> 5
 * nums = [7,7,7,7]; k = 1 -> 7
 * 
 * Approach:
 *  1) Maintain a min-heap of size K. Iterate over the nums:
 *      - push elements to heap
 *      - if heap size > K -> pop (remove current smallest among the top-k candidates)
 */

import { PriorityQueue } from "./2-Heaps";

function kthLargest(nums, k) {
    const pq = new PriorityQueue((a,b) => a - b);
    for(const x of nums) {
        pq.push(x);
        if(pq.size() > k) {
            pq.pop();
        }
    }
    return pq.peek();
}
/**
    Input: [5,2,9,1,7]; k = 3
 */


const input = [5,2,9,1,7];
console.log(kthLargest(input, 3));