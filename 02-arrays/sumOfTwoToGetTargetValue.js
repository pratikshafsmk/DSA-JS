// ================================
// Problem  : Two Sum
// Difficulty: Easy
// Link     : https://neetcode.io/problems/two-integer-sum/question
// ================================
// Approach : Use a hash map to store the numbers and their indices. For each number, calculate its complement (target - current number) and check if it exists in the hash map. If it does, return the pair. If not, add the current number to the hash map.
// Time     : O(n)
// Space    :   O(n)  
//
// ================================
const nums=[2,3,4,5];
const target=7;

function sumOfTwoToGetTargetValue(nums, target) { 
  const numSet = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) {
      return [complement, nums[i]];
    }
    numSet.set(nums[i], i);

  }
  return null;
}