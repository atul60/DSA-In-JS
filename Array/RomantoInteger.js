/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for(let i=0; i<s.length; i++) {
        switch(s.substring(i,i+2)) {
            case 'IV':
                result += 4;
                i++;
                continue;
            case 'IX':
                result += 9;
                i++;
                continue;
            case 'XL':
                result += 40;
                i++;
                continue;
            case 'XC':
                result += 90;
                i++;
                continue;
            case 'CD':
                result += 400;
                i++;
                continue;
            case 'CM':
                result += 900;
                i++;
                continue;
        }
        result += numValue[s.charAt(i)];
    }
    return result;
};

console.log(romanToInt('IX'));