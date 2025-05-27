/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const numLen = nums.length;
  const set = new Set();

  let result = -1;
  nums.forEach((num) => {
    if (set.has(num)) {
      result = num;
      return result;
    } else {
      set.add(num);
    }
  });

  return result;
};
