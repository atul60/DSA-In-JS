/**
 * Finds the maximum sum of a contiguous subarray using Kadane's Algorithm.
 * @param {number[]} nums - Array of integers.
 * @return {number} The maximum subarray sum.
 */
var maxSubArray = function (nums) {
  let len = nums.length;

  // If array has only one element, return it
  if (len === 1) return nums[0];

  // Initialize current sum and max sum with the first element
  let sum = nums[0];
  let maxSum = sum;

  // Traverse the array starting from the second element
  for (let i = 1; i < len; i++) {
    let no = nums[i];

    // If extending the current subarray gives a better sum, extend it
    // Otherwise, start a new subarray from current element
    if (sum + no > no) {
      sum += no;
    } else {
      sum = no;
    }

    // Update maxSum if current sum is greater
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
};
