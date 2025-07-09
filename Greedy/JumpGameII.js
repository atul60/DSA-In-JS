/**
 * Calculates the minimum number of jumps required to reach the last index.
 * If it's not possible to reach the end, returns -1.
 *
 * @param {number[]} nums - Array where each element represents the max jump length from that position.
 * @return {number} - Minimum number of jumps to reach the end, or -1 if unreachable.
 */
var jump = function (nums) {
  const len = nums.length;

  // If there's only one element, we're already at the end
  if (len == 1) return 0;

  // If the first element is 0, and we have more than one element, we can't move anywhere
  if (nums[0] == 0) return -1;

  let currJump = 0; // Number of jumps taken
  let currRechPoint = 0; // Current reachable point with currJump jumps
  let maxPos = 0; // Farthest index we can reach so far

  for (let i = 0; i < len; i++) {
    // Update the farthest point that can be reached
    maxPos = Math.max(maxPos, i + nums[i]);

    // If we are stuck at the current index and can't move further
    if (i == maxPos) return -1;

    // If the farthest reachable index reaches or exceeds the last index
    if (maxPos >= len - 1) {
      return currJump + 1;
    }

    // When we've reached the end of the current jump's range,
    // it's time to increase jump count and extend our reachable point
    if (i == currRechPoint) {
      currJump++;
      currRechPoint = maxPos;
    }
  }

  // In case we never reach the end
  return -1;
};
