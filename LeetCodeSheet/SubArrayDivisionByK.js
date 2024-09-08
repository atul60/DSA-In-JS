/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let sum = 0;
    const newArr = nums.map(num => sum += num);
    const obj = {};
    const remArr = newArr.map((num, index) => {
        let rem = num%k;
        if(rem < 0) 
           rem = k+rem;
        if(obj.hasOwnProperty(rem)) {
            obj[rem].push(index);
        } else {
            obj[rem] = [index];
        }
        return rem;
    });
    let count = 0;
    let len = 0;
    Object.keys(obj).forEach((key) => {
        len = obj[key].length;
        if(key == 0) {
            count += len*(len+1)/2
        } else if(len > 1) {
            count += len*(len-1)/2;
        }
    })
    return count;

};

let nums = [4,5,0,-2,-3,1], k = 5;
console.log(subarraysDivByK(nums, k));