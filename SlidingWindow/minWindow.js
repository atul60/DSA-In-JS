//incomplete

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;

  const tChrMap = {};
  for (let ch of t) {
    tChrMap[ch] = tChrMap[ch] ? tChrMap[ch]++ : 1;
  }
  let i = 0,
    j = 0;
  const window = {},
    windowLen = 0,
    minWindowLen = Number.MAX_VALUE;

  while (i < sLen && j < sLen) {
    if (Object.keys(window).length == 0) {
      if (tChrMap[s[i]]) {
        window[i] = 1;
        windowLen++;
        j = 1 + 1;
      }
      i++;
    } else {
      if (tChrMap[s[j]]) {
      } else {
      }
    }
  }
};
