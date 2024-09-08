/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    k = k%len;
    if(k === 0)
        return nums;
    const arr = [];
    let j = k-1;
    for(let i=len-1; i>=0; i--) {
        if(i >= len-k) {
            arr[j] = nums[i];
            j--;
        } else {
            nums[i+k] = nums[i];
        }
    }
    for(let i=0; i<k; i++) {
        nums[i] = arr[i];
    }
    return nums;
};