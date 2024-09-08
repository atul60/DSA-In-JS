/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if(len === 0 || len === 1) return len;
    const obj = {};
    let i=0, j=0, ch2, ch1;
    let maxLen = 0;
    while(j !== len && i<=j) {
        ch2 = s.charAt(j);
        if(ch2 in obj) {
            ch1 = s.charAt(i);
            while(ch1 !== ch2) {
                delete obj[ch1];
                i++;
                ch1 = s.charAt(i);
            }
            delete obj[ch1];
            i++;
        } else {
            obj[ch2] = j;
            maxLen = Math.max(maxLen, j-i+1);
            j++;
        }
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("dvdf"));