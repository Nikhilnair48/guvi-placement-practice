# Stack Problem 1: Valid Parentheses

## Problem statement

You're given a string containing only characters (, ), {, }, [ and ].
Determine whether the brackets are properly closed and nested.

Examples:

Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

Input: "([)]"
Output: false

Input: "{[]}"
Output: true


Stack

## Patter: Stack

use a stack to keep track of opening brackets; pop and match whenever a closing bracket is encountered

## Implementation

```js
    /**
     * @param {string} str
     * @returns {boolean}
     */
    // "{[]}("
    // "([)]"
    // "(((((((("
    function isValid(str) {
        const stack = [];
        const pair = { ')': '(', '}': '{', ']': '[' };

        for(const char of str) {
            // opening bracket - push onto the stack
            if(char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                // closing bracket - must match the top of the stack
                if(stack.length === 0 && stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }
        // return true only if the stack is empty
        return stack.length === 0;
    }

    Complexity
        Time: O(n)
        Space: O(n)
```

## Variation
    * Longest valid substring: find the length of the longest valid bracket substring (stack + index tracking)
    Input: "{[]}("