/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0, j=numbers.length-1;
    let currSum;
    while(i<j) {
        currSum = SVGAnimatedNumberList[i] + SVGAnimatedNumberList[j]
        if(currSum === target)
            return [i+1, j+1];
        if(currSum < target)
            i++;
        else j--
    }
};