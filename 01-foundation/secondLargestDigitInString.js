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

var secondHighest = function (s) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      //checking if s[i] in number char
      let num = Number(s[i]);
      if (num > first) {
        second = first;
        first = num;
      } else if (num < first && num > second) {
        second = num;
      }
    }
  }
  return second;
};
