/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const len = nums.length;
  const prefixSum = { 0: 1 };
  let leftSum = 0;
  let left = 0,
    right = 0;
  let totalCount = 0;

  while (right < len) {
    leftSum += nums[right];
    if (prefixSum[leftSum - k]) {
      totalCount += prefixSum[leftSum - k];
    }
    if (!prefixSum[leftSum]) prefixSum[leftSum] = 0;
    prefixSum[leftSum] += 1;
    right++;
  }

  return totalCount;
};
