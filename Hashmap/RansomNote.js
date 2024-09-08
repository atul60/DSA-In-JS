/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    let ch;
    let result = true;
    let i = 0;
    while(magazine.charAt(i)){
        ch = magazine.charAt(i);
        if(map[ch]) {
            map[ch] += 1;
        } else {
            map[ch] = 1;
        }
        i++;
    }
    i=0;
    while(ransomNote.charAt(i)){
        ch = ransomNote.charAt(i);
        if(map[ch] && map[ch] !== 0) {
            map[ch] -= 1;
        } else {
            result = false;
        }
    }
    return result;
};

console.log(canConstruct("aa", "aab"));