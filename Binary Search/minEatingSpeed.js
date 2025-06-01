/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const pilesLen = piles.length;
  const maxCoco = piles.reduce((max, curr) => (max = Math.max(max, curr)), 0);

  if (pilesLen == h) {
    return maxCoco;
  }

  let left = 1,
    right = maxCoco;
  let minCoco = maxCoco;

  function getHours(cocoPerHour) {
    return piles.reduce(
      (totalHour, cocoCount) =>
        (totalHour += Math.ceil(cocoCount / cocoPerHour)),
      0
    );
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let totalHours = getHours(mid);

    if (totalHours <= h) {
      minCoco = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return minCoco;
};
