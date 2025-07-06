/**
 * Finds the intersections between two lists of closed intervals.
 *
 * @param {number[][]} firstList - First list of sorted, non-overlapping intervals.
 * @param {number[][]} secondList - Second list of sorted, non-overlapping intervals.
 * @return {number[][]} - List of intersecting intervals between firstList and secondList.
 */
var intervalIntersection = function (firstList, secondList) {
  let m = firstList.length,
    n = secondList.length;
  let i = 0,
    j = 0; // Pointers for each list
  const result = [];

  // Iterate through both lists until one of them is fully traversed
  while (i < m && j < n) {
    // Calculate the start (left) and end (right) of the intersection interval
    let left = Math.max(firstList[i][0], secondList[j][0]);
    let right = Math.min(firstList[i][1], secondList[j][1]);

    // If intervals overlap (i.e., left <= right), add the intersection to the result
    if (left <= right) {
      result.push([left, right]);
    }

    // Move the pointer that has the interval ending earlier
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
