/**
 * Merges overlapping intervals.
 *
 * @param {number[][]} intervals - An array of intervals where each interval is a pair [start, end].
 * @return {number[][]} - A new array with merged non-overlapping intervals.
 */
var merge = function (intervals) {
  // Sort the intervals by their start time
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0]);

  // Initialize the first interval's start and end
  let [start, end] = intervals[0];
  const result = [];

  // Iterate through the rest of the intervals
  for (let i = 1; i < intervals.length; i++) {
    // If the current interval overlaps with the previous one
    if (end >= intervals[i][0]) {
      // Extend the end if needed
      if (end < intervals[i][1]) {
        end = intervals[i][1];
      }
    } else {
      // No overlap, so push the previous interval and reset start and end
      result.push([start, end]);
      [start, end] = intervals[i];
    }
  }

  // Push the last interval
  result.push([start, end]);

  return result;
};
