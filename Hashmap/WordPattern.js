/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sArr = s.split(" ");
    console.log(sArr);
    if(sArr.length !== pattern.length) 
        return false;
    let objP = {};
    let objS = {};
    let ch, ch2;
    let result = true, i=0;
    while(pattern.charAt(i)) {
        // console.log("obj", objP, objS, i);
        ch = pattern.charAt(i);
        if(objP[ch]) {
            if(objP[ch] !== sArr[i]) {
                result = false;
                break;
            }
        } else {
            ch2 = `${sArr[i]}`;
            console.log('test', objS, ch2, objS['constructor']);
            if(objS[ch2]) {
                if(objS[sArr[i]] !== ch) {
                    result = false;
                    break;
                }
            } else {
                objS[ch2] = ch;
            }
            objP[ch] = sArr[i];
        }
        i++;
    }
    return result;
};

console.log(wordPattern("abba", "dog constructor constructor dog"));