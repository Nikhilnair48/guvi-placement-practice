
# Hashmap based frequency counter

## What is a Hashmap?
In Javascript, a HashMap is essentially an object (`{}`) or a `Map` that stores key-value pairs - just like a dictionary.

## Basic properties

Features            Object (`{}`)                   Map
Keys                Strings or Symbols              Any type (the key can also be an object)
Order               Not guaranteed                  Insertion order is preserved
Performance         Good for majority of use cases  Optimized for frequent insertion & removed
Methods             Not many; `hasOwnProperty`      Built in methods: set, get, has, delete



## Examples

```js
    const map = new Map();
    map.set("name", "Mani");
    map.set(123, "Mani");
    
    if(map.has("name")) {
        console.log("name exists");
    }

    const savedName = map.get("name");

```


## Defintion & Intuition for the pattern
- Use a hashmap to count occurrences; compare and lookup with a time complexity of O(1)

## When to use this pattern?
- Anagram checks - two different words are given, check if both have the same character;
    - Eg: word1 - "computer", word2 - "ocmputre"
- Frequency based comparison

## Example - Anagram problem

```js
/**
 * Checks if two strings are anagrams of each other
 * first - first word
 * second - second word
 * return a boolean; if two words are anagram, true; else false
 */
// word1 - "computer", word2 - "ocmputre" -> true
// word1 - "test", word2 - "rest" -> false
 function isAnagram(first, second) {
    if(first.length !== second.length) return false;

    //   { t:2, e: 1, s: 1 }
    const count = {};

    // Count the occurrences of each character in "first"
    for(const char of first) {
        // test - "t", "e", "s", "t"
        if(count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    // Subtract counts using characters in "second"
    for(const char of second) {
        // character doesn't exist in the first word
        if(!count[char]) return false;
        count[char]--;
    }

    return true;
 }
```
