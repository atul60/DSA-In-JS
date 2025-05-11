/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const len = nums.length;
  let left = 0,
    middle = 0,
    right = 0;
  let result = 0;
  let currOdd = 0;
  let currCount = 1;

  while (currOdd < k) {
    if (nums[right] % 2 !== 0) {
      currOdd++;
    }
    right++;
  }

  //right++;
  while (right < len) {
    currCount = 1;

    while (right < len && nums[right] % 2 !== 1) {
      currCount++;
      right++;
    }

    while (nums[middle] % 2 !== 1) {
      middle++;
    }

    result += currCount * (middle - left + 1);
    middle += 1;
    left = middle;
    right++;
  }

  return result;
};

const nums = [1, 1, 2, 1, 1],
  k = 3;
console.log(numberOfSubarrays(nums, k));
