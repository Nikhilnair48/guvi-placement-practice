# Space Complexity

## What is Space Complexity?

Space complexity is a measure of how much memory your program needs as the input size (n) grows.

Memory in this case is a "temporary space" - used only during the execution of your program.

## Why does it matter?
- Memory is limited. If your program is inefficient, you can take too much memory and run out of memory on the device.
- In interviews, you usually want to use less space for better performance; note: there's a trade-off between memory vs speed in some cases

## Space Complexity Examples

```js
// given an array, compute the sum of all elements and return the total
function sum(array) {
    let total = 0;                              // O(1) space complexity
    for(let i = 0; i < array.length; i++) {     // i requires O(1) space complexity
        total += array[i];                      // O(1) space complexity
    }
    return total;                               
}

// sum has a space complexity of O(1)
// sum has a time complexity of O(n)
```

```js
// given an array, double each element in the array and return
function doubleArray(array) {
    const result = [];                          // empty array
    for(let i = 0; i < array.length; i++) {     // i requires O(1) space complexity
        result.push(array[i] * 2);              // size of result = n, where n is the size of array
    }
    return result;
}

// doubleArray has a space complexity of O(n)
// doubleArray has a time complexity of O(n)
```

```js

// given the number n, we will build an n x n matrix and return it
function buildMatrix(n) {
    const matrix = [];                      // O(1) space complexity
    for(let i = 0; i < n; i++) {            // O(n * n) space complexity
        const row = [];                     // O(1) space complexity
        for(let j = 0; j < n; j++) {
            row.push(i + j);                // O(1)
        }
        matrix.push(row);
    }
    return matrix;
}

// buildMatrix has a space complexity O(n * n) => O(n^2)
// buildMatrix has a time complexity of O(n^2)

```