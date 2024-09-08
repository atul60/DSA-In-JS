/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const len = intervals.length;
    if(len === 0) return [newInterval];
    const result = [];
    let isOverlaped = false, isCompleted = false;
    let prev, temp;
    for(let arr of intervals) {
        if(!isOverlaped) {
            if(isCompleted || arr[1] < newInterval[0]) {
                result.push(arr);
            } else {
                isOverlaped = true;
                if(arr[0] >= newInterval[0]) {
                    result.push([newInterval[0]])
                } else if(arr[0] < newInterval[0]) {
                    result.push([arr[0]]);
                }
                if(arr[1] >= newInterval[1]) {
                    temp = result.pop();
                    temp[1] = arr[1];
                    result.push(temp);
                    isCompleted = true;
                    isOverlaped = false;
                } else {
                    prev = newInterval[1];
                }
            }
        } else {
            if(arr[1] < prev)
                continue;
            else if(arr[0] >= prev ) {
                temp = result.pop;
                temp[1] = arr[1];
                result.push(temp);
                isCompleted = true;
                isOverlaped = false;
            } else {
                temp = result.pop;
                temp[1] = prev;
                result.push(temp);
                result.push(arr)
                isCompleted = true;
                isOverlaped = false;
            }
        }
    }
    return result;
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8])); //[4, 8]