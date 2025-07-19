/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const charPos = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charPos[char] = i;
  }
  const traverseSet = new Set();
  let start = 0;
  const result = [];
  while (start < s.length) {
    traverseSet.clear();
    let partialCount = 0;
    let i = start,
      lastInd = start;
    while (i <= lastInd) {
      const char = s[i];
      traverseSet.add(char);
      partialCount++;
      lastInd = Math.max(lastInd, charPos[char]);
      i++;
    }
    result.push(partialCount);
    start = i;
  }

  return result;
};
