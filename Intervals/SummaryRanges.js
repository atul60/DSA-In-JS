/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let prev, rangeFound = false, lastIndex;
    nums.forEach((num, index) => {
        if(index === 0) {
            prev = num;
            result.push(`${num}`);
            lastIndex=0;
        } else if(num === prev+1) {
            rangeFound = true;
            prev = num;
        } else if(rangeFound && num !== prev+1) {
            result[lastIndex] = result.at(-1) + `->${prev}`;
            result.push(`${num}`);
            lastIndex++;
            prev = num;
            rangeFound = false;
        } else {
            result.push(`${num}`);
            lastIndex++;
            prev = num;
            rangeFound = false;
        }
    })
    if(rangeFound) {
        result[lastIndex] = result.at(-1) + `->${prev}`;
    }
    return result;
};

console.log(summaryRanges([0,2,3,4,6,8,9]));