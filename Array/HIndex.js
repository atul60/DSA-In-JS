/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => b-a);
    const obj = {};
    let lastValue = 0
    for(let i=0; i<citations.length; i++) {
        if(obj[citations[i]]) {
            obj[citations[i]] = ++lastValue;
        } else {
            lastValue++;
            obj[citations[i]] = lastValue;
        }
    }
    let maxResult = 0;
    Object.keys(obj).forEach((citations) => {
        if(obj[citations] <= citations) {
            maxResult = Math.max(obj[citations], maxResult);
        } else {
            maxResult = Math.max(citations, maxResult);
        }
    })
    return maxResult;
};

console.log(hIndex([4,4,0,0]));