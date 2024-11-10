/* 
11. Container With Most Water
Solved
Medium
Topics
Companies
Hint
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

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