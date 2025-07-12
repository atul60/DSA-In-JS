/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0]);

  let [start, end] = intervals[0];
  const result = [];
  for (let i = 1; i < intervals.length; i++) {
    if (end >= intervals[i][0]) {
      if (end < intervals[i][1]) {
        end = intervals[i][1];
      }
    } else {
      result.push([start, end]);
      [start, end] = intervals[i];
    }
  }
  result.push([start, end]);

  return result;
};
