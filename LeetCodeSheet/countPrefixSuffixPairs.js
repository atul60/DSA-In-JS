/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    const wordsLen = words.length;
    let count = 0;

    function isPrefixAndSuffix(subString, string) {
        const len = subString.length;
        return subString == string.substring(0, len) && subString == string.slice(-len);
    }

    for(let i=0; i<wordsLen; i++) {
        for(let j=i+1; j<wordsLen; j++) {
            if(isPrefixAndSuffix(words[i], words[j])) count++;
        }
    }

    return count;
};

console.log(countPrefixSuffixPairs(["bc","b","ab"]));
