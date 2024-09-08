/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    let k=0;
    let result = false;
    if(tLen === 0 && sLen === 0) 
        return true;
    for(let i=0; i<tLen; i++) {
        if(t.charAt(i) === s.charAt(k)) {
            k++;
        }
        if(k === sLen) {
            result = true;
        }
    }
    return result;
};