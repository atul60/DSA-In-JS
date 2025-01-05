/* 

Code
Testcase
Test Result
Test Result
2381. Shifting Letters II
Medium
Topics
Companies
Hint
You are given a string s of lowercase English letters and a 2D integer array shifts where shifts[i] = [starti, endi, directioni]. For every i, shift the characters in s from the index starti to the index endi (inclusive) forward if directioni = 1, or shift the characters backward if directioni = 0.

Shifting a character forward means replacing it with the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). Similarly, shifting a character backward means replacing it with the previous letter in the alphabet (wrapping around so that 'a' becomes 'z').

Return the final string after all such shifts to s are applied.

 

Example 1:

Input: s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]
Output: "ace"
Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = "zac".
Secondly, shift the characters from index 1 to index 2 forward. Now s = "zbd".
Finally, shift the characters from index 0 to index 2 forward. Now s = "ace".
Example 2:

Input: s = "dztz", shifts = [[0,0,0],[1,1,1]]
Output: "catz"
Explanation: Firstly, shift the characters from index 0 to index 0 backward. Now s = "cztz".
Finally, shift the characters from index 1 to index 1 forward. Now s = "catz".
 
*/

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {

    const LOWEST_ASCII = 97;
    const HIGHEST_ASCII = 122;
    const RANGE = HIGHEST_ASCII - LOWEST_ASCII + 1;
    
    function getNextChar(char, diffAmount) {
        const currentAscii = char.charCodeAt(0);
        const normalisedAmount = diffAmount % RANGE;
        let nextAscii = currentAscii + normalisedAmount;
        
        if(nextAscii < LOWEST_ASCII) nextAscii = HIGHEST_ASCII - (LOWEST_ASCII - nextAscii - 1);
        if(nextAscii > HIGHEST_ASCII) nextAscii = LOWEST_ASCII + (nextAscii - HIGHEST_ASCII -1);

        return String.fromCharCode(nextAscii);

    }

    let sLen = s.length;
    const diffArr = Array(sLen+1).fill(0);

    const sArr = [...s];

    for(let [start, end, direction] of shifts) {
        diffArr[start] = diffArr[start] + (direction == 0 ? -1 : 1);
        diffArr[end+1] = diffArr[end+1] + (direction == 0 ? 1 : -1);
    }

    let currDiff = 0;
    for(let i=0; i<sLen; i++) {
        currDiff += diffArr[i];
        sArr[i] = getNextChar(sArr[i], currDiff);
    }

    return sArr.join("");
};

const s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]];
console.log(shiftingLetters(s, shifts));