/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const len = heights.length;
    let maxArae = 0;
    let area = 0;
    for(let i=0, j=len-1; i<j; ) {
        area = Math.min(heights[i], heights[j])*(j-i+1);
        maxArae = Math.max(area, maxArae);
        if(heights[i] > heights[j]) {
            j--;
        } else {
            i++;
        }
    }
    return maxArae;
};

const heights = [2,1,5,6,2,3];
console.log(largestRectangleArea(heights));