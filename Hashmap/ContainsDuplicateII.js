/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const obj = {};
    let result = false;
    nums.forEach((num, index) => {
        if(obj[num]) {
            obj[num].push(index);
        } else {
            obj[num] = [index];
        }
    })
    const arr = Object.entries(obj);
    let i=0;
    let len;

    while(arr[i] && !result) {
        if(arr[i][1].length > 1) {
            for(let j=1; j<arr[i][1].length; j++) {
                len = arr[i][1][j] - arr[i][1][j-1];
                if(len <= k) {
                    result = true;
                    break;
                } 
            }
        }
        i++;
    }
    return result;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));