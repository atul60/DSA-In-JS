/**
 * @param {number[]} nums
 * @return {boolean}
 * This function checks whether there exists an increasing triplet subsequence
 * in the given array such that i < j < k and nums[i] < nums[j] < nums[k].
 */
var increasingTriplet = function (nums) {
  const len = nums.length;

  // If array has fewer than 3 elements, no triplet is possible
  if (len < 3) return false;

  // Initialize two variables to track the smallest and second smallest elements
  let min1 = Infinity; // Smallest so far
  let min2 = Infinity; // Second smallest so far

  let i = 0;
  while (i < len) {
    const num = nums[i];

    if (num < min1) {
      // Update min1 if a new smaller element is found
      min1 = num;
    } else if (num > min1 && num < min2) {
      // Update min2 if num is greater than min1 but smaller than current min2
      min2 = num;
    } else if (num > min2) {
      // Found a number greater than both min1 and min2
      // => increasing triplet exists
      return true;
    }

    i++;
  }

  // No increasing triplet found
  return false;
};
