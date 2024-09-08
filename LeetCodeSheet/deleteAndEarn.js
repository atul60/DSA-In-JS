/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const len = nums.length;
    if(len === 0) 
        return 0;
    else if(len === 1) 
        return nums[0];
    nums.sort((a, b) => a - b);
    const map = new Map();
    nums.forEach(num => {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });
    console.log("calling", map, nums);
    // const set = new Set(nums);
    // 
    return maxEarnedPoint(map);
}

const maxEarnedPoint = (map) => {
    const maxSum = new Array(map.length);
    let index = 0;
    // console.log("calling", map);

    map.forEach((value, num) => {
        let currSum = num*map.get(num);
        if(index === 0) {
            maxSum[index] = currSum;
        }
        else {
           if(map.has(num-1)) {
            if(index === 1) {
                maxSum[index] = Math.max(maxSum[index-1], currSum);
            } else {
                maxSum[index] = Math.max(maxSum[index-2] + currSum, maxSum[index-1]);
            }
           } else {
            maxSum[index] = maxSum[index-1] + currSum;
           }
        }
        index++;
    })
    return maxSum.pop();
}
const nums = [8,10,4,9,1,3,5,9,4,10]; // 2, 3, 4
console.log(deleteAndEarn(nums))