// ================================
// Problem  : Two Sum
// Difficulty: Easy
// Link     : https://namastedev.com/practice/sum
// ================================
// Approach : reduce
// Time     : O(n)
// Space    : O(n)
// ================================
function sum(...args) {
  // Your implementation
  return args.reduce((curr, acc) => curr + acc, 0);
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum;
