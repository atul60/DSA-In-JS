/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6':'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};
var letterCombinations = function(digits) {
    if (!digits) return [];
    if(digits.length === 1) {
        return map[digits].split('');
    }
    const firstDigit = digits[0];
    let partialResult = letterCombinations(digits.substring(1));
    let newResult = [];
    Array.from(map[firstDigit]).forEach((letter) => {
        newResult = [...newResult, ...partialResult.map((comb) => letter + comb)]
    })
    return newResult;
};

