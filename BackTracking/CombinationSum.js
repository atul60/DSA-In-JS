/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const len = candidates.length;
    const allCombinations = (start, partialSumArr, partialSum) => {
        if(partialSum > target) return;
        if(partialSum == target) {
            result.push(partialSumArr);
            return;
        }
        if(start == len) return;
        for(let i=start; i<len; i++) {
            allCombinations(i, [...partialSumArr, candidates[i]], partialSum+candidates[i]);
        }
    }
    allCombinations(0, [],0);
    return result;
};

let candidates = [2,3,6,7], target = 7;
combinationSum(candidates, target);