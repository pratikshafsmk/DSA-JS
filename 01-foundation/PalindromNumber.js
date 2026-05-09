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
var isPalindrome = function(x) {

   // let reversedS = x.split('').reverse().join('');
    return x.toString()===x.toString().split('').reverse().join('')
};