// ================================
// Problem  : Find the smallest number in an array of numbers.
// Difficulty: Easy
// Link     :https://namastedev.com/practice/find-smallest-number
// ================================
// Approach : Use a single loop to iterate through the array and keep track of the smallest number found so far. If a smaller number is found, update the smallest number. Return the smallest number after the loop completes.
// Time     : O(n)
// Space    : O(1)
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
