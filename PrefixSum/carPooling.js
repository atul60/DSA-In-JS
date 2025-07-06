/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const tripLength = trips.reduce((finalDestination, trip) => {
    if (finalDestination < trip[2]) {
      finalDestination = trip[2];
    }
    return finalDestination;
  }, 0);
  const seatsArr = Array.from({ length: tripLength + 1 }).fill(0);
  trips.forEach(([passengers, from, to]) => {
    seatsArr[to - 1] += passengers;
    if (from > 0) {
      seatsArr[from - 1] -= passengers;
    }
  });

  let i = tripLength;
  let prefixSum = 0;
  while (i >= 0) {
    prefixSum += seatsArr[i];
    if (prefixSum > capacity) {
      return false;
    }
    i--;
  }
  return true;
};

let result = carPooling(
  [
    [7, 5, 6],
    [6, 7, 8],
    [10, 1, 6],
  ],
  16
);
console.log(result);
