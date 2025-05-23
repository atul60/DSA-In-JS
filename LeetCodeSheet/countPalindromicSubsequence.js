/* 
1930. Unique Length-3 Palindromic Subsequences
Medium
Topics
Companies
Hint
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
 

Example 1:

Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")
Example 2:

Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".
Example 3:

Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")
 

Constraints:

3 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const palindromSet = new Set();
    const keySet = new Set();
    const totalCount = 0;
    
    function canBePalindrom(substring) {
        // const substring = s.substring(start, end+1);
        const substringLen = substring.length;
        const firstChar = substring.charAt(0);
        const lastChar = substring.at(substringLen-1);
        let setKey = firstChar + lastChar;
        const result = {isPossible: false, count: 0};
        if (substringLen < 3 || keySet.has(setKey)) return result;

        keySet.add(setKey);

        if(firstChar == lastChar) {
            let currIdx = 1;
            while(currIdx < substringLen-1) {
                palindromSet.add(`${firstChar}${s.charAt(currIdx)}${lastChar}`);
                currIdx++;
            }
        }
    }
    
    function palindromeStirng(substring) {
        const stringLen = substring.length;
        let start = 0, end = stringLen - 1;
        
        if(substring.length > 2) {
            canBePalindrom(substring) 
            palindromeStirng(substring.substring(start, end));
            palindromeStirng(substring.substring(start+1, end+1));
        }
    }

    palindromeStirng(s);

    return palindromSet.size;
};

const s = "bbcbaba";

console.log(countPalindromicSubsequence(s));
