// ================================
// Problem  : contains duplicate
// Difficulty: Easy
// Link     :https://neetcode.io/problems/duplicate-integer/question

// ================================
// Approach : Use a set to keep track of the numbers we have seen so far. Iterate through the array and check if the number is already in the set. If it is, return true. If we finish iterating through the array without finding any duplicates, return false.

// Time     : O(n)
// Space    : O(n)
// ================================
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const set = new Set();
    for (const n of nums) {
      if (set.has(n)) {
        return true;
      }
      set.add(n);
    }
    return false;
  }
}
