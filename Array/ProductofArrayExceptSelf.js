/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const pFor = [];
    const pBac = [];
    const len = nums.length;
    let p = 1;
    let b = 1;
    let j = len-1;
    if(len === 1)
        return nums;
    for(let i=0, j = len-1; i<nums.length; i++, j--) {
        p = p*nums[i];
        pFor[i] = p;
        b = b*nums[j];
        pBac[j] = b;
    }
    for(let i=0; i<len; i++) {
        if(i===0) {
            nums[i] = pBac[i+1];
        } else if(i===len-1) {
            nums[i] = pFor[i-1];
        } else {
            nums[i] = pFor[i-1]*pBac[i+1];
        }
    }
    return nums;
};

console.log(productExceptSelf([1,2,3,4]));