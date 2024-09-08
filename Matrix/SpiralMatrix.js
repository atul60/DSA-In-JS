/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const arr = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0, right = cols-1, top=0, bottom=rows-1;
    while(top<=bottom || left <=right) {
        for(let i=left; i<=right && top<=bottom; i++) {
            arr.push(matrix[top][i]);
        }
        if(top >= bottom) break;
        top++;
        for(let i=top; i<=bottom && right>=left; i++) {
            arr.push(matrix[i][right]);
        }
        right--;
        for(let i=right; i>=left && bottom>=top; i--) {
            arr.push(matrix[bottom][i]);
        }
        bottom--;
        for(let i=bottom; i>=top && right>=left; i--) {
            arr.push(matrix[i][left]);
        }
        left++;
    }
    return arr;
};

const matrix = [[2,5,8],[4,0,-1]]
console.log(spiralOrder(matrix));