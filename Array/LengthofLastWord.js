/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let newS = s.trim();
    let arr = newS.split(' ');
    let lastString = arr.pop();
    return lastString;
    
};
console.log(lengthOfLastWord("Hello World"));