// ================================
// Problem  :Encode and Decode Strings
// Difficulty: Medium
// Link     : https://neetcode.io/problems/string-encode-and-decode/question
// ================================
// Approach : Use a delimiter to separate the strings when encoding. For decoding, split the encoded string using the same delimiter to retrieve the original strings.
// Time     : O(n)
// Space    : O(n)
//
// ================================

const encode = (strs) => {
  return strs.map((str) => str.length + "#" + str).join("");
};

const decode = (s) => {
  const strs = [];
  let i = 0;
  while (i < s.length) {
    const j = s.indexOf("#", i);
    const length = Number(s.slice(i, j));
    const str = s.slice(j + 1, j + 1 + length);
    strs.push(str);
    i = j + 1 + length;
  }
  return strs;
};
const strs = ["hello", "world", "this", "is", "a", "test"];
const encoded = encode(strs);
console.log("Encoded:", encoded);
const decoded = decode(encoded);
console.log("Decoded:", decoded);
