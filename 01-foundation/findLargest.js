// ================================
// Problem  : Find the largest number in an array of numbers.
// Difficulty: Easy
// Link     : https://namastedev.com/practice/find-largest-number
// ================================
// Approach : Use a mathematical approach to reverse the integer. Extract digits one by one and build the reversed number. Handle the sign and check for overflow.
// Time     : O(n)
// Space    : O(1)
//
// ================================
function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  const flatArray = arr.flat(Infinity);
  if (flatArray.length === 0) return null;

  let largest = flatArray[0];
  for (let i = 0; i < flatArray.length; i++){
    const value = flatArray[i];
    if (!Number.isFinite(value)) return false;
    if (largest < value) {
      largest = value;
    }
  }

  return largest
}

module.exports = { findLargest };
