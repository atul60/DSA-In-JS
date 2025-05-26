//incomplete

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const len = s.length;
  let left = 0,
    right = 0;

  const tMap = {};
  for (let item of t) {
    if (!tMap[item]) tMap[item] = 0;
    tMap[item] += 1;
  }

  const localTMap = { ...tMap };
  localTMap._proto_ = { isEmpty: false };

  let subArryLen = 0,
    minLen = -1,
    result = "";

  while (right < len) {
    let currItem = s[right];
    if (!localTMap[currItem]) {
      subArryLen++;
    } else {
      localTMap[currItem] -= 1;
      subArryLen++;
    }
  }
};

const s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
