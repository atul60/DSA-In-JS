/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  const len = nums.length;

  if (k == len) return len;

  let left = 0,
    right = 0;
  let currZeroCount = 0,
    maxOneCount = 0;
  while (right < len) {
    if (nums[right] == 0) {
      currZeroCount++;
    }

    while (currZeroCount > k) {
      if (nums[left] == 0) {
        currZeroCount--;
      }
      left++;
    }

    maxOneCount = Math.max(maxOneCount, right - left + 1);
    right++;
  }

  return maxOneCount;
};

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;

console.log(longestOnes(nums, k));
