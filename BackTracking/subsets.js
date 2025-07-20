/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length;
  if (len == 0) return [[]];

  let num = nums[0];
  const partialResult = subsets(nums.slice(1));
  const copy = JSON.parse(JSON.stringify(partialResult));
  for (let i = 0; i < copy.length; i++) {
    copy[i].push(num);
  }

  return [...copy, ...partialResult];
};
