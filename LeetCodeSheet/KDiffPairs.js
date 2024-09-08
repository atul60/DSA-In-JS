/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let count = 0;
var findPairs = function(nums, k) {
    nums.sort();
    let len = nums.length;
    let diffArr = nums.flatMap((num, index) => {
        return index == 0 ? [] : num - nums[index-1];
        })
    console.log("diffArr--", diffArr);
    let diff = diffArr[0];
    let i = 0, j = 0;
    while(i < len-1 && j<len-1) {
        if((i == 0 && j==0)) {
            j++;
            diff += diffArr[j];
        }
        if(diff == k) {
            j++;
            diff += diffArr[j];
            count++;
        } 
        else if(diff < k) {
            j++;
            diff += diffArr[j];
        } else {
            diff -= diffArr[i];
            i++;
        }
    }
    return count;
};

let nums = [1,2,3,4,5], k = 1;
console.log(findPairs(nums, k));