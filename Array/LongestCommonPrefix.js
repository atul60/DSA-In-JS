/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let len = strs.length;
    let result = "";
    for(let i=0; i<strs[0].length; i++) {
        if(strs[0].charAt(i) !== strs[len-1].charAt(i)) {
            break;
        }
        result += strs[0].charAt(i);
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));