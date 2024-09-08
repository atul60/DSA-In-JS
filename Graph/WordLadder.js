/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.indexOf(endWord) == -1) return 0;

    const isDiffByOne = (word1, word2) => {
        let diffCount = 0;
        const wordLen = word1.length;
        for(let i=0; i<wordLen; i++) {
            if(word1.charAt(i) != word2.charAt(i)) diffCount++;
        }
        return diffCount == 1 ? true : false;
    }

    const bfs = () => {
        const queue = [];
        let minSteps = 1;
        queue.push([beginWord, minSteps]);
        const visited = new Set();
        visited.add(beginWord);
        while(queue.length) {
            let [currWord, minSteps] = queue.shift();
            if(currWord == endWord) return minSteps;
            for(let word of wordList) {
                if(!visited.has(word) && isDiffByOne(currWord, word)) {
                    queue.push([word, minSteps+1]);
                    visited.add(word);
                }
            }
        }
        return 0;
    }

    return bfs();

};