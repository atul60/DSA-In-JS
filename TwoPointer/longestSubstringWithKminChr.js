/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  //base case
  const len = s.length;
  if (len < k) return 0;

  //finding break-point
  const chrCount = new Map();
  for (let ch of s) {
    chrCount.set(ch, (chrCount.get(ch) || 0) + 1);
  }
  let breakIdx = 0;
  while (breakIdx < len && chrCount.get(s[breakIdx]) >= k) breakIdx++;
  if (breakIdx == len) return len;

  //getting l1 and l2
  const l1 = longestSubstring(s.substring(0, breakIdx), k);
  const l2 = longestSubstring(s.substring(breakIdx + 1), k);

  //return max of l1 and l2;
  return Math.max(l1, l2);
};
