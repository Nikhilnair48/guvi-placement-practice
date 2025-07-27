# 3. Complexity (time or space)

## What is Big-O Notation?
Desribes how an algorithm's runtime or memory grows as the input size (n) increase.
It captures the upper bound - what happens in the worst case scenario for large input.

## What does it matter?
- Ensures your solution scales when n goes into millions/billions.

## Time Complexity

Notation: O(1) - constant
    - this says that your program runs once in worst case

Examples of O(1):

```js
const nums = [1,2,3];   // constant time
nums.push(4);           // constant time; nums: [1,2,3,4]
nums.pop();             // constant time; nums: [1,2,3]
nums[0];                // constant time;

const map = {};
map["key"] = 42;         //constant time
console.log(map["key"]);
```

Notation: O(n) - linear
// Looping over an array

function logArrayToConsole(array) {
    for(let i = 0; i < randomNumbers.length; i++) {
        console.log(randomNumbers[i]);  // how many times this loop run? 5
    }
}
const randomNumbers = [1,2,3,4,5];
logArrayToConsole(randomNumbers);

// Quadratic time complexty
Notation: n*n => O(n^2)

```js
const arrayOfNumbers = [1,2,3,4,5];
<!-- Nested loop -->
for(let i = 0; i < arrayOfNumbers.length; i++) {
    for(let j = 0; j < arrayOfNumbers.length; j++) {
        console.log(arrayOfNumbers[i], arrayOfNumbers[j]);
    }
}
```

<!-- n = 5; 5 * 5 -> 25 -->
<!-- i = 1; 2 is the element; 
            output: 2,1
                    2,2
                    2,3
                    2,4
                    2,5
 -->

Notation: n*n*n => O(n^3)
```js
for(let i = 0; i < arrayOfNumbers.length; i++) {
    let j = 0; 
    while(j < arrayOfNumbers.length) {
        for(let k = 0; k < arrayOfNumbers.length; k++) {
            console.log(arrayOfNumbers[i], arrayOfNumbers[j], arrayOfNumbers[k]);
        }
        j++;
    }
}
```
<!-- Input size is 5 -> out loop runs 5 times, 
                            for each time, inner loop runs 5 times
                                for each time, nested inner loop runes 5 times
n * n * n => 5 * 5 * 5 => 125 -->

Time complexity of logarithm

Algorithm: binary search - allows you to find an element E in a sorted array A in a time efficient manner
A -> [1,2,3,4,5,6,7,8,9,10]
E -> 2
<!-- How can you search A?
    Start from index 0 and check if each element equals E
    Start from the last index and go to index 0
    Time complexity: O(n)
-->
<!-- 
In binary search:
    we must loop over "search area" in every iteration
        left = 0
        right = array.length - 1
        while loop that runs until your left and right are equal
            find the middle element
            checks: is the middle element my target?

Starts of by looking the middle element of the array
6 / 3 => 2  -> O(1)
3 > 2 -> true
new sub-array we need to search: [1,2]
2 / 2 -> 1
2 == 2 -> true
 -->
Time complexity: O(log n)
Concept: Divide & Conquer

<!-- O(2 ^ n) -->
Fibonacci Sequence - 0 1 1 2 3 5 8....
<!-- Recursion to solve this problem -->

```js
function fib(n) {
    <!-- base condition -->
    if(n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

fib(10000);
```
For any number n, for each call to the fib function two more calls will spawn
Time complexity: Big O(2 ^ n)

<!-- Factorial: O(n!) -->
<!-- O(n + m) -->