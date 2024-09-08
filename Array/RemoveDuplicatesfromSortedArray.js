/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    let k = 0;
    for(let i=0; i<len; i++) {
        if(i === 0) {
            continue;
        }
        if(nums[k] < nums[i]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return ++k;
};

console.log(removeDuplicates([1,1,2]));