/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const len = nums.length;

  if (len == 0) return nums;

  let left = 0,
    mid = 0,
    right = len - 1;
  while (mid <= right) {
    if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
    } else {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
    }
  }
};
