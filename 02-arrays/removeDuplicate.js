// ================================
// Problem  : Remove duplicate from sorted array
// Difficulty: Easy
// Link     : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// ================================
// Approach : Use two pointers to iterate through the array. The first pointer (i) keeps track of the last unique element, while the second pointer (j) scans through the array. When a new unique element is found, it is placed at the position after the last unique element(wi), and the first pointer is incremented. Finally, return the length of the unique elements.
// Time     : O(n)
// Space    : O(1)
//
// ================================
var removeDuplicates = function (nums) {
  let i = 0;
  j = 1;
  wi = 1;

  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      nums[wi] = nums[j];
      i = j;
      wi++;
    }
    j++;
  }

  return wi;
};
