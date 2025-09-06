/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  backtrack(s, 0, [], result);
  return result;
};

function backtrack(s, idx, partRes, result) {
  const len = s.length;
  if (idx == len) {
    result.push([...partRes]);
    return;
  }
  let temp = "";
  for (let i = idx; i < len; i++) {
    temp += s[i];
    if (isPalindrome(temp)) {
      partRes.push(temp);
      backtrack(s, i + 1, partRes, result);
      partRes.pop();
    }
  }
}

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

const s = "aab";
console.log(partition(s));
