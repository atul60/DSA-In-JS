/**
 * Generate all unique permutations of an array of numbers
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const len = nums.length;
  if (len < 2) return [nums]; // If only one element, return it as the only permutation

  const result = [];
  backtrack(nums, len, 0, result);
  return result;
};

function backtrack(nums, len, level, result) {
  // Base case: if we reach the last position, push current permutation
  if (level == len - 1) {
    result.push([...nums]); // Copy the array, don't push the reference
    return;
  }

  const seen = new Set(); // Track which numbers we've used at this level
  for (let i = level; i < len; i++) {
    if (seen.has(nums[i])) continue; // Skip duplicates at the same level
    seen.add(nums[i]);

    swap(nums, level, i); // Fix one number at the current position
    backtrack(nums, len, level + 1, result); // Recurse for the next position
    swap(nums, level, i); // Backtrack: restore the array state
  }
}

// Helper function to swap two elements in an array
function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

// Example usage:
const nums = [1, 1, 2];
console.log(permuteUnique(nums));
// Output: [ [1,1,2], [1,2,1], [2,1,1] ]
