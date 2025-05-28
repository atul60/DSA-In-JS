var searchRange = function (nums, target) {
  function findBound(isFirst) {
    let left = 0;
    let right = nums.length - 1;
    let bound = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1; // search left half
        } else {
          left = mid + 1; // search right half
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  }

  return [findBound(true), findBound(false)];
};
