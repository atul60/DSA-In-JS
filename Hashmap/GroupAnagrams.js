/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const len = strs.length;
    if(len === 1) return [strs];
    const obj = {};
    let temp;
    for(let i=0; i<len; i++) {
        temp = strs[i];
        strs[i] = strs[i].split("").sort().join("");
        if(obj.hasOwnProperty(strs[i])) obj[strs[i]].push(temp);
        else obj[strs[i]] = [temp];
    }
    const result = [];
    Object.entries(obj).forEach(([key, value]) => {
        result.push(value)
    })
    return result;
};