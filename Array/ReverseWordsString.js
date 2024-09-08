/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let len = s.length;
    let temp = '';
    let newString = '';
    let space = false;
    for(let i=len-1; i>=0; i--) {
        if(s.charAt(i) === ' ') {
            newString = newString + temp + `${!space ? s.charAt(i) : ''}`;
            temp = '';
            space = true;
        } else {
            temp = s.charAt(i) + temp;
            space = false;
        }
    }
    if(temp !== '') {
        newString = newString +  temp;
    }
    return newString;
}