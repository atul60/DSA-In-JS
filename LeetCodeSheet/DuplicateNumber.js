/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let n = nums.length;
    let totalSum = n*(n-1)/2;
    nums.forEach(num => {
        totalSum -= num;
    })
    return Math.abs(totalSum);
};

let nums = [3,1,3,4,2];
console.log(findDuplicate(nums));