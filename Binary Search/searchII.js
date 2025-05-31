/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    // Found key
    if (nums[mid] === target) return true;

    // Handle duplicates
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      l++;
      r--;
      continue;
    }

    // Left half is sorted
    if (nums[l] <= nums[mid]) {
      // Check if target is in left half
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    }

    // Right half is sorted
    else {
      // Check if target is in right half
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }

  return false;
};
