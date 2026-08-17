// ================================
// Problem  :Top K Frequent Elements
// Difficulty: Medium
// Link     : https://neetcode.io/problems/top-k-elements-in-list/question
// ================================
// Approach : Use a hash map to count the frequency of each element in the input array. Then, create an array of buckets where the index represents the frequency and each bucket contains the elements with that frequency. Finally, iterate through the buckets in reverse order to collect the top k frequent elements.
// Time     : O(n + k log n), where n is the number of elements in the input array and k is the number of unique elements (for sorting the unique elements)
// Space    :   O(n + k), where n is the number of elements in the input array and k is the number of unique elements (for storing the frequency counts and the buckets)
//
// ================================

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
const map = new Map();
for (const num of nums) {
  map.set(num, (map.get(num) || 0) + 1);
}
const entries = Array.from(map.entries());
entries.sort((a, b) => b[1] - a[1]);
const result = entries.slice(0, k).map((entry) => entry[0]);
console.log(result);
