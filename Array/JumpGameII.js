/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let farthest = 0;
    let lastPoit = nums.length-1;
    if(lastPoit === 0)
        return 1;
    let minJump = 0;
    let currEnd = 0;
    for(let i=0; i<=lastPoit; i++) {
        farthest = Math.max(farthest, i+nums[i]);
        if(i >= currEnd) {
            minJump++;
            currEnd = farthest;
            if(currEnd >= lastPoit)
                return minJump;
        }
    }
};