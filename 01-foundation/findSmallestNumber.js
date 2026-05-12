// ================================
// Problem  : Find the smallest number in an array of numbers.
// Difficulty: Easy
// Link     :https://namastedev.com/practice/find-smallest-number
// ================================
// Approach : Convert the number to a string and use built-in methods like split, reverse, and join.
// Time     : O(n)
// Space    : O(n)
//
// ================================

function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  if (typeof arr[0] !== "number" || !Number.isFinite(arr[0])) return false;

  // const smallest = arr.reduce((acc, curr) => {
  //   if (typeof curr !== 'number' || !Number.isFinite(curr)) return false;
  //   return (curr < acc ? curr : acc);
  // }, arr[0])
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return false;
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
  // re
}

module.exports = { findSmallest };
