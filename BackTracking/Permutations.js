/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const removeItem = (arr, item) => {
        const result = [];
        for(let num of arr) {
            if(num != item) {
                result.push(num);
            }
        }
        return result;
    }
    const allPossibleCombination = (remainArr, partialComb) => {
        if(remainArr.length == 0) {
            result.push(partialComb);
            return;
        }
        for(let num of remainArr) {
            let newArr = removeItem(remainArr, num);
            allPossibleCombination(newArr, [...partialComb, num]);
        }
    }
    allPossibleCombination(nums, []);
    return result;
};

const a = [1,2,3];
permute(a);

