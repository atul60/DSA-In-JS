/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let result = [];
var combinationSum = function(candidates, target) {
    let temp = [];
    helper(candidates, target, 0, temp);
    return result;
};

const helper = function(candidates, target, index, temp) {
    if(target == 0) {
        return result.push([...temp]);
    }
    for(let i=index; i<candidates.length; i++) {
        if(candidates[i] <= target) {
            temp.push(candidates[i]);
            helper(candidates, target-candidates[i], i, temp);
            temp.pop();
        }
    }
}

let candidates = [3,12,9,11,6,7,8,5,4], target = 15;
console.log(combinationSum(candidates, target));