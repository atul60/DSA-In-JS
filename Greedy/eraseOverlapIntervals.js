/**
 * Finds the minimum number of intervals to remove to eliminate all overlaps.
 * @param {number[][]} intervals - An array of intervals [start, end].
 * @return {number} - The minimum number of intervals to remove.
 */
var eraseOverlapIntervals = function (intervals) {
  // Sort intervals by their starting point
  intervals.sort((prev, next) => prev[0] - next[0]);

  // Initialize the end of the first interval
  let end = intervals[0][1];
  // Counter for the number of intervals to remove
  let count = 0;

  // Iterate through the rest of the intervals
  for (let i = 1; i < intervals.length; i++) {
    // If current interval starts before the previous one ends, it's overlapping
    if (intervals[i][0] < end) {
      // Increment removal counter
      count++;
      // Keep the interval with the smaller end to minimize future overlaps
      end = Math.min(end, intervals[i][1]);
    } else {
      // No overlap; update the end to the current interval's end
      end = intervals[i][1];
    }
  }

  // Return the total number of intervals removed
  return count;
};
