/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set();
    let isDuplicate = false;
    nums.forEach(num => {
        if(numsSet.has(num)) {
            isDuplicate = true;
            return;
        } else {
            numsSet.add(num);
        } 
    })

    return isDuplicate;
};