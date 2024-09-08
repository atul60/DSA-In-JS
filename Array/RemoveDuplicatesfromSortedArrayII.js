/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const max = Number.MAX_SAFE_INTEGER;
    let len = nums.length;
    let k = 1;
    let result = len;
    let lastNum = nums[0]
    for(let i=1; i<len-1; i++) {
        if(nums[i] === lastNum) {
            k++;
        } else {
            lastNum = nums[i];
            k = 1;
        }
        if(k > 2) {
            nums[i] = max;
            result--;
        }
    }
    nums.sort((a, b) => a-b);
    console.log(nums);
    return result;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));