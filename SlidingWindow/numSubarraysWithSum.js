/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const len = nums.length;
    const prefixSum = Array.from({length: len}).fill(-1);
    let count = 0, currSum = 0;
    const sumMapper = {0: 1};
    for(let i=0; i<len; i++) {
        currSum += nums[i];
        prefixSum[i] = currSum;
        if(sumMapper[currSum - goal]) {
            count += sumMapper[currSum - goal];
        }
        if(!sumMapper[currSum]) {
            sumMapper[currSum] = 0;
        }
        sumMapper[currSum] += 1;
    }

    return count;
};

const nums = [1,0,1,0,1], goal = 2;
console.log(numSubarraysWithSum(nums, goal));