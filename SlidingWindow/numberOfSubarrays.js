/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  const numLen = nums.length;
  let oddCount = 0,
    oddLen = 0;
  let left = 0,
    right = 0;

  let leftCount = 1,
    rightCount = 1;

  function getLeftCount() {
    let leftCount = 1;

    let currNum = nums[left];
    while (currNum % 2 == 0) {
      leftCount++;
      currNum = nums[++left];
    }

    return leftCount;
  }

  let currNum;
  while (oddLen < k && right < numLen) {
    currNum = nums[right];
    if (currNum % 2 == 1) {
      oddLen++;
    }

    right++;
  }

  if (oddLen == k) {
    oddCount++;
  }

  while (right < numLen) {
    currNum = nums[right];
    if (currNum % 2 == 0) {
      rightCount++;
    } else {
      leftCount = getLeftCount();
      oddCount += leftCount * rightCount;
      leftCount = 1;
      rightCount = 1;
    }

    right++;
  }

  if (rightCount != 1) {
    leftCount = getLeftCount();
    oddCount += leftCount * rightCount;
  }

  return oddCount;
};

const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
  k = 3;
console.log(numberOfSubarrays(nums, k));
