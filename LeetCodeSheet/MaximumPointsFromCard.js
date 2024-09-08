/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let len = cardPoints.length;
    let sum=0, maxSum=0;
    for(let i=0; i<k; i++) {
        sum += cardPoints[i];
    }
    maxSum = sum;
    for(let i=k-1, j=len-1; i>=0; i--, j--) {
        sum = sum - cardPoints[i] + cardPoints[j];
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};

let cardPoints = [1,2,3,4,5,6,1], k = 3;
console.log(maxScore(cardPoints, k));