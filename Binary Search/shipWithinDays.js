/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let maxWeight = 0;
  const totalWeight = weights.reduce((total, weight) => {
    maxWeight = Math.max(weight, maxWeight);
    total += weight;
    return total;
  }, 0);
  let left = maxWeight;
  let right = totalWeight;

  function getShippingDays(maxAllowedWeight) {
    let total = 0;
    let days = 1;
    for (let weight of weights) {
      total += weight;

      if (total > maxAllowedWeight) {
        total = weight;
        days++;
      }
    }

    return days;
  }

  let minWeight = totalWeight;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let shippingDays = getShippingDays(mid);
    if (shippingDays <= days) {
      right = mid - 1;
      minWeight = Math.min(mid, minWeight);
    } else {
      left = mid + 1;
    }
  }

  return minWeight;
};
