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
