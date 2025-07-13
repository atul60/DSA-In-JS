/**
 * @param {number[][]} points - An array where each element is a balloon represented by [start, end] coordinates.
 * @return {number} - The minimum number of arrows required to burst all balloons.
 */
var findMinArrowShots = function (points) {
  // Sort balloons based on their starting point
  points.sort((a, b) => a[0] - b[0]);

  const totalBallons = points.length;

  // Counter for overlapping intervals (balloons that can be burst with a single arrow)
  let overlapping = 0;

  // Set the initial end boundary from the first balloon
  let end = points[0][1];

  // Loop through the remaining balloons
  for (let i = 1; i < totalBallons; i++) {
    // If the current balloon starts before or at the end of the previous overlapping range
    if (end >= points[i][0]) {
      // Increment overlapping count
      overlapping++;
      // Update the overlapping range's end to the minimum end point
      end = Math.min(end, points[i][1]);
    } else {
      // No overlap; update the end to current balloon's end
      end = points[i][1];
    }
  }

  // The minimum arrows needed = total balloons - overlapping ones
  return totalBallons - overlapping;
};
