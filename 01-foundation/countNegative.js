// ================================
// Problem  :count-negative-numbers-in-a-sorted-matrix/
// Difficulty: Easy
// Link     : https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// ================================
// Approach : Iterate through the 2D array and count the number of negative numbers. Since the matrix is sorted, we can optimize the search by starting from the bottom-left corner and moving either right or up based on the value of the current element.
// Time     : O(m+n) where m is the number of rows and n is the number of columns
// Space    : O(1)
// ================================

function countNegative(grid) {
  let sum = 0;
  for (let i of grid) {
    console.log("insode i" + i);
    for (let j of i) {
      console.log("insode j" + j);
      if (j < 0) {
        sum += 1;
        console.log(sum);
      }
    }
  }
  console.log(sum);
}
const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
countNegative(grid);
