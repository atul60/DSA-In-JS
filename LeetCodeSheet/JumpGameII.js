/**
 * @param {number[]} nums
 * @return {number}
*/
let minJumps = Number.MAX_VALUE;
var jump = function(nums) {
    let len = nums.length;
    helper(nums, 0, 0, len);
    return minJumps;
};

const helper = function(nums, currIndex, jumps, len) {
    if(currIndex == len-1){
        minJumps = Math.min(jumps, minJumps);
        return;
    }
    if(currIndex + nums[currIndex] < len) {
        for(let i=currIndex + nums[currIndex]; i>currIndex; i--) {
            helper(nums, i, jumps+1, len)
        }
    } else if(currIndex + nums[currIndex] >= len-2) {
        helper(nums, len-1, jumps+1, len)
    }
}

let nums = [1,2];
console.log(jump(nums));