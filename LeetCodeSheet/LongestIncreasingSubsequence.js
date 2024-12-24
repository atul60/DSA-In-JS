/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const numsLen = nums.length;
    const dp1 = new Array(numsLen+1).fill(-1);
    
    const dp = [];
    dp[0] = [...dp1];
    for(let i=1; i<=numsLen; i++) {
        dp[i] = [...dp1];
    }
    

    function lgtIncSeq(currIdx, prevIdx) {
        if(currIdx == numsLen) return 0; 
        if(dp[currIdx][prevIdx+1] != -1) return dp[currIdx][prevIdx+1];
        let len;
        if(prevIdx == -1 || nums[currIdx] > nums[prevIdx]) {
            len = Math.max(1+lgtIncSeq(currIdx+1, currIdx), lgtIncSeq(currIdx+1, prevIdx));
        } else {
            len = lgtIncSeq(currIdx+1, prevIdx);
        }
        dp[currIdx][prevIdx+1] = len;
        return len;
    }
    return lgtIncSeq(0, -1);
};

const nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));