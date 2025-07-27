## Exercise Questions

1. **Find the Maximum Number of Vowels in a Substring of Size k**

   > **Problem:** Given a lowercase string and an integer k, what’s the largest number of vowels you can find in any substring of length k?
   > **Example:**

   ```text
   Input: s = "azerdii", k = 3  
   Substrings of length 3: "aze","zer","erd","rdi","dii"  
   Vowel counts:             2,    1,    1,    1,    2  
   Output: 2
   ```

2. **Merge Two Sorted Lists of Customer IDs**

   > **Problem:** Two lists of customer IDs are each already sorted. Return a new list containing only the IDs that appear in both, preserving order.
   > **Example:**

   ```text
   Input: a = [1,2,2,3], b = [2,2,4]  
   Common IDs in order: [2,2]  
   Output: [2,2]
   ```

3. **Determine if One Sentence Is a Permutation of Another**

   > **Problem:** Given two sentences (ignore spaces/punctuation and case), can you reorder the letters of the first to match the second exactly?
   > **Example:**

   ```text
   Input: s = "Dormitory", t = "Dirty room!"  
   Cleaned (lowercase letters only): "dormitory", "dirtyroom"  
   They contain the same letters: true  
   Output: true
   ```

4. **Find a Pair That Sums to Target in an Unsorted List**

   > **Problem:** From an unsorted list of numbers, find any two whose sum equals a given target.
   > **Example:**

   ```text
   Input: nums = [3,1,4,2], target = 6  
   Possible pair: 4 + 2 = 6  
   Output: [4,2]  (or their indices—either is fine for this exercise)
   ```

5. **Shortest Subarray with Sum ≥ S**

   > **Problem:** Given a list of positive integers and a threshold S, what’s the length of the shortest contiguous run whose sum is at least S?
   > **Example:**

   ```text
   Input: arr = [2,3,1,2,4,3], S = 7  
   Candidate runs: [2,3,1,2] sum=8 (len=4), [4,3] sum=7 (len=2), …  
   Smallest length = 2  
   Output: 2
   ```