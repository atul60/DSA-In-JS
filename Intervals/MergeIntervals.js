/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function sortInterval(arr1, arr2) {
    return arr1[0] - arr2[0];
}

var merge = function(intervals) {
    const len = intervals.length;
    if(len === 1) return intervals;
    intervals.sort((arr1, arr2) => sortInterval(arr1, arr2))
    const result = [];
    let prev, prevArr;    
    intervals.forEach((arr, index) => {
        if(index === 0) {
            result.push([arr[0]]);
            prev = arr[1];
        } else if(arr[0] > prev) {
            prevArr = result.pop();
            prevArr[1] = prev;
            result.push(prevArr);
            result.push([arr[0]]);
            prev = arr[1];
        } else if(arr[1] > prev) {
            prev = arr[1]
        }
    }) 
    prevArr = result.pop();
    prevArr[1] = prev;
    result.push(prevArr);
    return result;
};

console.log(merge([[1,4],[0,4]]));