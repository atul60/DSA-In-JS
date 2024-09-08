/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s === t)
        return true;
    const obj = {};
    let ch1, ch2;
    let result = true, i=0;
    while(s.charAt(i)) {
        ch1 = s.charAt(i);
        ch2 = t.charAt(i);
        if(obj.hasOwnProperty(ch1)) {
            if(obj[ch1] !== ch2){
                result = false;
                break;
            }
        } else {
            obj[ch1] = ch2;
        }
        i++;
    }
    return result;
};

console.log(isIsomorphic("egg", "adp"));