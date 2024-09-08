/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    if(len === 0 || (len===1 && nums[0] < target))
        return 0;
    else if(len===1 && nums[0] >= target)
        return 1;
    let i=0, j=0, minLen = 0 , currLen = 1, sum = nums[0];
    while(i<=j) {
        if(sum >= target) {
            sum -= nums[i];
            minLen = minLen === 0 ? currLen : Math.min(currLen, minLen);
            i++;
            currLen--;
        } else if(j !== len-1) {
            j++;
            sum += nums[j];
            currLen++;
        } else {
            break;
        }
    }
    return minLen;
};