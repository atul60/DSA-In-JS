/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    if(len == 1) return nums[0];
    let maxSum = sum;
    let sum = nums[0];
    for(let i=1; i<len; i++) {
        let no = nums[i];
        if(sum + no > no) {
            sum += no;
        } else {
            sum = no;
        }
        if(maxSum < sum) {
            maxSum = sum;
        }
    }
    return sum;
};