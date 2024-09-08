/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    const obj = {};
    for(let i=0; i<len; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]] += 1;
        } else {
            obj[nums[i]] = 1;
        }
    }
    let ans;
    Object.keys(obj).forEach((key) => {
        if(obj[key] > len/2)
            ans = Number(key);
    })
    return ans;
};

majorityElement([3,1,3]);