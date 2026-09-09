// ================================
// Problem  :Products of Array Except Self
// Difficulty: Medium
// Link     : https://neetcode.io/problems/products-of-array-discluding-self/question
// ================================
// Approach : Use two arrays to store the products of all elements to the left and right of each index. Then, multiply the corresponding values from both arrays to get the final result. This avoids using division and handles cases with zeros in the input array.
// Time     : O(n)
// Space    : O(n)
//
// ===========================================
let output = new Array(nums.length).fill(1);
let leftProduct = 1;
for (let i = 0; i < nums.length; i++) {
  output[i] = output[i] * leftProduct;
  leftProduct = leftProduct * nums[i];
}
let rightProduct = 1;
for (let i = nums.length - 1; i >= 0; i--) {
  output[i] = output[i] * rightProduct;
  rightProduct = rightProduct * nums[i];
}
const nums = [1, 2, 3, 4];
const result = output;
console.log(result); // Output: [24, 12, 8, 6]
