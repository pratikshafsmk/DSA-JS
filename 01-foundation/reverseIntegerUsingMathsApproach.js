// ================================
// Problem  : Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Difficulty: Medium
// ================================
// Approach : Use a mathematical approach to reverse the integer. Extract digits one by one and build the reversed number. Handle the sign and check for overflow.
// Time     : O(n)
// Space    : O(1)
//
// ================================
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  while (x != 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);
    rev = rev * 10 + digit;
    if (rev <= -(2 ** 31) || rev >= 2 ** 31 - 1) {
      return 0;
    }
  }
  return rev;
};
