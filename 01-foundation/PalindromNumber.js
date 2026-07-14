// ================================
// Problem  : 9. Palindrome Number
// Difficulty: Easy
// Link     :https://leetcode.com/problems/palindrome-number/description/
// ================================
// Approach : Convert the number to a string and use built-in methods like split, reverse, and join.
// Time     : O(n)
// Space    : O(n)
//
// ================================
var isPalindrome = function (x) {
  // let reversedS = x.split('').reverse().join('');
  return x.toString() === x.toString().split("").reverse().join("");
};

function isPalindromeNumber(x) {
  if (typeof x !== "number" || !Number.isFinite(x)) return false;
  if (x < 0) return false; // Negative numbers are not palindromes
  let original = x;
  let reversed = 0;

  while (num < 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
}
