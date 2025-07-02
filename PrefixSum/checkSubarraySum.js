/**
 * Checks if the array contains a continuous subarray of at least size 2
 * that sums up to a multiple of k.
 *
 * @param {number[]} nums - The input array of numbers
 * @param {number} k - The target divisor
 * @return {boolean} - True if such a subarray exists, false otherwise
 */
var checkSubarraySum = function (nums, k) {
  const len = nums.length;
  const remenderObj = {}; // Stores the first index at which each remainder occurs
  let i = 0;
  let prefixSum = 0;

  while (i < len) {
    prefixSum += nums[i]; // Calculate prefix sum up to current index
    const rem = prefixSum % k; // Compute remainder of prefixSum divided by k

    // If remainder is 0 and subarray size is at least 2
    // Or if the same remainder was seen before and the subarray size is >= 2
    if (
      (rem == 0 && i != 0) ||
      (remenderObj.hasOwnProperty(rem) && i - remenderObj[rem] > 1)
    ) {
      return true;
    }
    // Store the index of the first occurrence of this remainder
    else if (!remenderObj.hasOwnProperty(rem)) {
      remenderObj[rem] = i;
    }

    i++;
  }

  // No such subarray found
  return false;
};
