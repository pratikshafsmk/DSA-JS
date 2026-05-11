// ================================
// Problem  : Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Difficulty: Medium
// Link     : https://leetcode.com/problems/reverse-integer/description/

// ================================
// Approach : Convert the integer to a string, reverse the string, and convert it back to an integer. Handle the sign and check for overflow.
// Time     : O(n)
// Space    : O(n)
// ================================

var reverse = function(x) {
    let sign=x>0?1:-1;
    let reverse= Number(Math.abs(x).toString().split('').reverse().join('')) *sign
    if(
        reverse<=-(2 ** 31)|| reverse>= (2**31) -1
        ) return 0
    return reverse
 
};