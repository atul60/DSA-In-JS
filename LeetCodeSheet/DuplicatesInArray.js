/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let len = nums.length;
    let temp = nums[0];
    let index = 0;
    for(let i=0; i<len; i++) {
        if(nums[i] == i+1){
            continue;
        } else {
            temp = nums[nums[index]];
            nums[nums[index]] = nums[index];
            // temp = 
        }
    }
};

let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));