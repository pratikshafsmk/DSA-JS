// ================================
// Problem  : Find the largest number in an array of numbers.
// Difficulty: Easy
// Link     : https://namastedev.com/practice/find-largest-number
// ================================
// Approach : Use a single loop to iterate through the array and keep track of the largest number found so far. If a larger number is found, update the largest number. Return the largest number after the loop completes.
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
  for (let i = 0; i < flatArray.length; i++) {
    const value = flatArray[i];
    if (!Number.isFinite(value)) return false;
    if (largest < value) {
      largest = value;
    }
  }

  return largest;
}

module.exports = { findLargest };
