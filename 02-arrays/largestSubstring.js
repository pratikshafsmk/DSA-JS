// ================================
// Problem  : Given a string s, find the length of the longest substring without duplicate characters.
// Difficulty: Medium
// Link     :https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?utm_source=chatgpt.com

// ================================
// Approach : Use a sliding window approach with two pointers to keep track of the current substring. Use a set to store the characters in the current substring and update the maximum length as you iterate through the string.

// Time     : O(n)
// Space    : O(n)
// ================================

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
