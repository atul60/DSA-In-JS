/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    let maxHeight=0, maxWidth=0;
    let height = 0;
    let width = 0;
    horizontalCuts.sort();
    verticalCuts.sort();
    let horizontalGap = horizontalCuts.length+1;
    let verticalGap = verticalCuts.length+1;
    for(let i=0; i<horizontalGap; i++) {
        height = i == 0 ? horizontalCuts[i] : i == horizontalGap-1 ? h-horizontalCuts[i-1] : horizontalCuts[i] - horizontalCuts[i-1];
        maxHeight = Math.max(maxHeight, height);
    }

    for(let i=0; i<verticalGap; i++) {
        width = i == 0 ? verticalCuts[i] : i == verticalGap-1 ? w - verticalCuts[i-1] : verticalCuts[i] - verticalCuts[i-1];
        maxWidth = Math.max(maxWidth, width);
    }

    return (maxHeight*maxWidth)%(Math.pow(10, 9) + 7);
};

let h = 1000000000, w = 1000000000, horizontalCuts = [2], verticalCuts = [2];
console.log(maxArea(h, w, horizontalCuts, verticalCuts));