/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  const gLen = g.length;
  const sLen = s.length;

  let i = 0,
    j = 0;
  let count = 0;
  while (i < gLen && j < sLen) {
    if (g[i] <= s[j]) {
      count++;
      i++;
    }
    j++;
  }

  return count;
};
