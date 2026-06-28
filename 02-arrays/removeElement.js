// ================================
// Problem  : Remove element from array
// Difficulty: Easy
// Link     : https://leetcode.com/problems/remove-element/description/
// ================================
// Approach : Use two pointers to iterate through the array. The first pointer (i) scans through the array, while the second pointer (j) keeps track of the position to place the next non-val element. When a non-val element is found, it is placed at the position indicated by j, and j is incremented. Finally, return the length of the modified array (j).
// Time     : O(n)
// Space    : O(1)
//
// ================================

const nums = [3, 2, 2, 3];
const val = 3;
function removeElement(nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
