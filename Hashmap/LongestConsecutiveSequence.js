/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const obj = {};
    nums.forEach((num) => {
        if(obj.hasOwnProperty(num)) {
            obj[num] += 1;
        } else obj[num] = 1;
    })
    let count = 0, maxCount = 0, next;
    Object.keys(obj).forEach((num, index) => {
        num = Number(num);
        if(!obj.hasOwnProperty(num-1)) {
            next=0;
            count=0;
            while (obj.hasOwnProperty(num+next)) {
                count++;
                next++;
            }
            maxCount = Math.max(maxCount, count);
        }

    })
    return maxCount;
};

console.log(longestConsecutive([1,0,-1]));