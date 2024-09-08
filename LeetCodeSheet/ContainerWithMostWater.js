/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let water = 0;
    let maxWater = 0;

    while(i < j) {
        water = Math.min(height[i], height[j]) * (j-i);
        maxWater = Math.max(water, maxWater);
        if(height[i] > height[j])
            j--;
        else
            i++;
    }
    return maxWater;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));