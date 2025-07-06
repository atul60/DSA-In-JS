// Greedy Approach
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  return isPossible(nums, 0, Array.from({ length: nums.length }).fill(-1));
};

function isPossible(arr, currPos, dp) {
  const len = arr.lenght;
  if (dp[currPos] != -1) return dp[currPos];
  if (currPos + arr[currPos] >= len - 1) return true;

  let result = false;

  for (let i = currPos + arr[currPos]; i > currPos; i--) {
    result = result || isPossible(arr, i);
  }

  return result;
}

// Better Approach
var canJump1 = function (nums) {
  const len = nums.length;
  let maxReach = 0;

  for (let i = 0; i < len; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
};
