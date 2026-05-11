// ================================
// Problem  : 1796. Second Largest Digit in a String
// Difficulty: Easy
// Link     : https://leetcode.com/problems/second-largest-digit-in-a-string/description/
// ================================
// Approach : iterate over string check if its number, then convert it to Num, then check if its grete then num, if yes then put it in first, and put ealier first value in second, else check if its smaller then first and greter then second then put it in second, lastly return second
// Time     : O(n)
// Space    : O(n)
//
// ================================
function countNegatives(arr) {
  // implement your solution here
  if (!Array.isArray(arr)) return false;

  return arr.reduce((acc, x) => {
    if (!Number.isFinite(x)) return false;
   return  (x < 0 ? acc + 1 : acc), 0
  })
}

module.exports = { countNegatives };

