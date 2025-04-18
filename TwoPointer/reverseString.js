/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let start = 0;
  let end = len - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }

  return s;
};
