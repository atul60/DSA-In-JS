/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length;
  if (length === 0) {
    return -1;
  } else if (length === 1) {
    if (nums[0] === target) return 0;
    return -1;
  }

  let startIdx = 0,
    endIdx = length - 1;
  while (startIdx < endIdx) {
    let mid = Math.floor((startIdx + endIdx) / 2);
    if (nums[mid] === target) return mid;
    if (nums[startIdx] === target) return startIdx;
    if (nums[endIdx] === target) return endIdx;

    if (nums[startIdx] < nums[mid]) {
      if (target > nums[startIdx] && target < nums[mid]) {
        endIdx = mid - 1;
      } else {
        startIdx = mid + 1;
      }
    } else {
      if (target > nums[mid] && target < nums[endIdx]) {
        startIdx = mid + 1;
      } else {
        endIdx = mid - 1;
      }
    }
  }
  return -1;
};
