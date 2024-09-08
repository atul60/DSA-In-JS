/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;
    let i=0, j=len-1;
    let width = len-1;
    let area = 0, maxArea = 0;
    while(i<j) {
        area = Math.min(height[i], height[j])*width;
        maxArea = Math.max(area, maxArea);
        if(height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
        width--;
    }
    return maxArea;
};