/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    nums.forEach((num) => {
        let temp = [];
        result.forEach((item) => {
            let newItem = JSON.parse(JSON.stringify(item));
            newItem.push(num);
            temp.push(newItem);
        })
        result = [...result, ...temp];
    })
    return result;
};

let nums = [1,2,3];
console.log(subsets(nums));