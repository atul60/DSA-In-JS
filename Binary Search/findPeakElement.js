/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;
  nums[-1] = nums[nums.length] = -Number.MAX_VALUE;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

    if (nums[mid] < nums[mid - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
