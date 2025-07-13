/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const len = ratings.length;
  const candyCount = Array.from({ length: len }).fill(1);

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyCount[i] = Math.max(candyCount[i - 1] + 1, candyCount[i]);
    }
  }

  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyCount[i] = Math.max(candyCount[i + 1] + 1, candyCount[i]);
    }
  }
  return candyCount.reduce((total, count) => (total += count), 0);
};

console.log(candy([1, 3, 2, 2, 1]));
