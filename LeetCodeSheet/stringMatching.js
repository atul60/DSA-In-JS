/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const answer = new Set();
    let wordsLen = words.length;
    for(let i=0; i<wordsLen; i++) {
        for(let j=0; j<wordsLen; j++) {
            if(i == j) continue;
            if(words[i].includes(words[j])) {
                answer.add(words[j]);
            }
        }
    }

    return [...answer];
};
console.log(stringMatching(["leetcode","et","code"]));
