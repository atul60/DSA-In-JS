/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let ans = nums[0];
    let min = nums[0];
    let max = nums[0];
    let prevMax;
    let prevMin;
    nums.forEach((num, index) => {
        prevMin = min;
        prevMax = max;
        if(index !== 0) {
        if(num > 0) {
            max = Math.max(prevMax*num, num);
            min = Math.min(prevMin*num, num);
        } else {
            min = Math.min(prevMax*num, num);
            max = Math.max(prevMin*num, num);
        }
    }
    ans = Math.max(ans, max);
    })
return ans;
};