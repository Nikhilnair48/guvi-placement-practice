# Two Pointers Pattern

### Definition & Intuition
- You would place one pointer at the start and one at the end
- Move inward based on comparison to target

### When do you use this pattern?
- Pair-sum in sorted array
- In-place partioning

### Example
- Given a sorted array and a target, return two elements in the array that add up to the target
Eg: 
array = [1,2,3,4,5,6]
target = 6
Possibilities:
- 1 + 2, 1 + 3, 1 + 4, 1 + 4, 1 + 5, 1 + 6
- 2 + 3, 2 + 4, 2 + 5, 2 + 6
...
- 4 + 5

```js

    function findTargetInArray(array, target) {
        for(let i = 0; i < array.length; i++) {
            for(let j = i + 1; j < array.length; j++) {
                if(array[i] + array[j] === target) {
                    return [i, j];
                }
            }
        }
    }

```

```js

    /**
     * twoSumSorted - find indicies of two numbers in a sorted array that add up to the target
     * array - 
     * target - 
     * return - indicies of the elements that add up to the target
     */           
    // array = [1,2,3,4,5,6]
    function twoSumSorted(array, target) {
        let left = 0;
        let right = array.length - 1;

        while(right > left) {
            const sum = array[left] + array[right];

            if(sum === target) {
                return [left, right];
            } else if(sum < target) {
                // Need a bigger sum - move left pointer to the right
                left++;
            } else {
                // Need a smaller sum - move right pointer to the left
                right--;
            }
        }
        // No element pair found
        return null;
    }
```

Variations:
    - Two Sum in an unsorted array
    - Three-pointer extensions -> 3 elements that add to the target, 4, 5...