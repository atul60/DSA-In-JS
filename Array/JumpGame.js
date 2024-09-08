/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let i = nums[0];
    return isLast(0, nums.length-1, 0, 0, nums);
};

function isLast(curr, last, nums) {
    if(nums[curr + nums[curr]] >= last)
        return true;
    if(nums[curr + nums[curr]] === 0) 
        return -1;
    return isLast(curr + nums[curr], last, nums) === -1 ? isLast(curr + nums[curr] - 1, last, nums) : false;
}

console.log(canJump([2,5,0,0]));