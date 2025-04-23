// [Better Approach] Prefix and suffix max for each index – O(n) Time and O(n) Space
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  const left = Array.from({ length: len });
  const right = Array.from({ length: len });
  for (let i = 0; i < len; i++) {
    if (i == 0) {
      left[i] = height[0];
      continue;
    }
    left[i] = Math.max(left[i - 1], height[i]);
  }
  for (let j = len - 1; j >= 0; j--) {
    if (j == len - 1) {
      right[j] = height[j];
      continue;
    }
    right[j] = Math.max(height[j], right[j + 1]);
  }

  const totalWater = 0;
  for (let i = 0; i < len; i++) {
    totalWater += Math.min(left[i], right[i]) - height[i];
  }

  return totalWater;
};

//[Expected Approach] Using Two Pointers – O(n) Time and O(1) Space

var trap = function (height) {
  const len = height.length;
  if (len < 1) return 0;
  let left = 0,
    right = len - 1,
    lMax = height[0],
    rMax = height[len - 1];
  let totalWater = 0;
  while (left <= right) {
    if (lMax < rMax) {
      totalWater += lMax - height[left];
      left++;
      lMax = Math.max(lMax, height[left]);
    } else {
      totalWater += rMax - height[right];
      right--;
      rMax = Math.max(rMax, height[right]);
    }
  }
  return totalWater;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
