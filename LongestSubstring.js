/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let longestString;
    let currLen;
    if(len == 0)
        return 0;
    else {
        longestString = 1;
        currLen = 1;
        let track = s.split('');
        let set = new Set();
        set.add(track[0]);
        for(let i=0, j=1; j<len;) {
            if(set.has(track[j])) {
                set.delete(track[i]);
                i++;
                currLen--;
            } else {
                set.add(track[j]);
                j++;
                currLen++;
            }
            longestString = currLen > longestString ? currLen : longestString;
        }
    }
    return longestString;
};

console.log(lengthOfLongestSubstring('abcabcbb'));