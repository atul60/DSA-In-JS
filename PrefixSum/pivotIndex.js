/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length;
  let currIndex = 0,
    currSum = 0;
  let totalSum = nums.reduce((total, currItem) => (total += currItem), 0);

  while (currIndex < len) {
    if (currSum == totalSum - currSum - nums[currIndex]) {
      return currIndex;
    }
    currSum += nums[currIndex];
    currIndex++;
  }

  return -1;
};
