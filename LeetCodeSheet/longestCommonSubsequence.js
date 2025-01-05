/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length, len2 = text2.length;
    let source, target, minLen, maxLen;
    if(len1 < len2) {
        minLen = len1;
        maxLen = len2
        source = text1;
        target = text2
    } else {
        minLen = len2;
        maxLen = len1;
        source = text2;
        target = text1;
    }
    const validIdxObj = {};
    const dp = Array(minLen+1).fill().map(() => Array(maxLen+1).fill(0));
    function getMaxCommon(srcIdx, trgIdx) {
        for(let i=srcIdx; i<minLen; i++) {
            let sCh = source.charAt(i);
            let allIndexes = getAllIndexes(sCh, target, validIdxObj);
            let trgIdxNew = getValidIndex(allIndexes, trgIdx);
            if(dp[i][trgIdxNew]) return dp[i][trgIdxNew]; 
            if(target.includes(sCh) && trgIdxNew >= trgIdx ) {
                dp[i][trgIdxNew] = Math.max(1 + getMaxCommon(i+1, trgIdxNew+1), getMaxCommon(i+1, trgIdx));
                return dp[i][trgIdxNew];
            }
        }

        return 0;
    }

    function getValidIndex(allIndexes, trgIdx) {
        let validIndex = -1;
        allIndexes.some(index => {
            if (index >= trgIdx) {
                validIndex = index;
                return true;
            }
        });

        return validIndex;
    }

    
    getMaxCommon(0, 0);
    return dp[minLen-1][maxLen-1];
};

function getAllIndexes(ch, str, validIdxObj) {
    if(validIdxObj[ch]) return validIdxObj[ch];
    let indexes = [];
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i) == ch) {
            indexes.push(i);
        }
    }

    validIdxObj[ch] = indexes;
    return indexes;
}

let text1 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", 
text2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

console.log(longestCommonSubsequence(text1, text2));