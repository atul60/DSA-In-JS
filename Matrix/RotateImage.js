/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix[0].length;
    let temp1, temp2;
    let k = n;
    let start = 0;
    while (k > 1) {
        start++;
        for(let i=start; i<n-start-1; i++) {
            temp1 = matrix[start][i]; 
            temp2 = matrix[i][n-start-1];
            matrix[i][n-start-1] = temp1;
            temp1 = temp2;
            temp2 = matrix[n-start-1][n-start-1-i]; 
            matrix[n-start-1-i][n-start-1] = temp1;
            temp1 = temp2;
            temp2 = matrix[n-start-1-i][start];
            matrix[n-start-1-i][start] = temp1;
            temp1 = temp2;
            temp2 = matrix[start][i];
            matrix[start][i] = temp1;
        }
        k = k-2;
    }
    return matrix;
};
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix));