// ================================
// Problem  : Reverse string
// Difficulty: Easy
// Link     : https://leetcode.com/problems/reverse-string/
// ================================
// Approach : Use two pointers to swap the characters in the string. The first pointer (left) starts at the beginning of the string, while the second pointer (right) starts at the end of the string. Swap the characters at the left and right pointers, then move the left pointer to the right and the right pointer to the left. Repeat this process until the left pointer is greater than or equal to the right pointer.
// Time     : O(n)
// Space    : O(1)
//
// ================================
function reverseString(s) {
  let j = s.length - 1;
  let temp;
  for (let i = 0; i < j; i++) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    j--;
  }
}

reverseString(["h", "e", "l", "l", "o"]);
