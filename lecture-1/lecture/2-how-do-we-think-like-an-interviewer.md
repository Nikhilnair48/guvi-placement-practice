# 2. What do you need to think like an interviewer?

Focus Areas:
    - Correctness
    - Efficiency
    - Readablity
    - Communication

Demonstration on Readability & Correctness:

<!-- [1,2,3,4] -> false -->
<!-- [1,2,3,2,4] -> true -->
<!-- Option A -->
```js
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
```

<!-- Option B -->
<!-- Input: [1,2,3,2,4]; return true -->
<!-- Set variable seen: (1,2,3) -->
```js
/**
 * hasDuplicates - checks if an array has duplicate values
 * 
 * arr - array of elements to be evaluated for duplicates
 */
function hasDuplicates(arr) {
    // Validate input
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array);
    }

    const seen = new Set();
    for(const item of arr) {
        if(seen.has(item)) {
            // Duplicate found
            return true;
        }
        seen.add(item);
    }
    return false;
}
```