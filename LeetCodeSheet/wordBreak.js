/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict)
    const arrLen = s.length;
    const dp = [];
    // for(let i=0; i<arrLen; i++) {
    //     dp[i] = Array(arrLen).fill(0);
    // }
    return helper(0, s, set);
};

function helper(i, s, set) {
    if(s.length === 0)
        return true;
    for(let j=i+1; j<=s.length; j++) {
        if(set.has(s.substring(i, j))) {
            if(helper(j, s, set))
                return true;
        }
    }
    return false;
}

const s = "leetcode";
const wordDict = ["leet","code"];
console.log(wordBreak(s, wordDict));