/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    let set = new Set();
    nums.forEach((num, index) => {
        obj[num] = index;
    })
    let req;
    for(let i=0; i<nums.length; i++) {
        req = target - nums[i];
        if(obj[req] && i !== obj[req]) {
            return [i, obj[req]]
        }
    }
};