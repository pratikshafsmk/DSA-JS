// ================================
// Problem  : group nanagrams
// Difficulty: Easy
// Link     : https://neetcode.io/problems/anagram-groups/question
// ================================
// Approach : Use a hash map to group words by their sorted character representation. For each word, sort its characters and use the sorted string as a key in the hash map. Append the original word to the list of words corresponding to that key. Finally, return the values of the hash map as the grouped anagrams.
// Time     : O(n * k log k), where n is the number of words and k is the maximum length of a word (for sorting each word)
// Space    : O(n * k), where n is the number of words and k is the maximum length of a word (for storing the grouped anagrams in the hash map)
//
// ================================

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
const map = new Map();
for (const str of strs) {
  const sortedStr = str.split("").sort().join("");
  if (!map.has(sortedStr)) {
    map.set(sortedStr, []);
  }
  map.get(sortedStr).push(str);
}
console.log(Array.from(map.values()));
