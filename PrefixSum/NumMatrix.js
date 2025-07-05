/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
  this.prefixMatrixSum = getPrefixSum();

  function getPrefixSum() {
    let rows = matrix.length;
    let cols = matrix[0].length;
    const prefixSum = Array.from({ length: rows }).map(() =>
      Array.from({ length: cols })
    );

    for (let row = 0; row < rows; row++) {
      let total = 0;
      for (let col = 0; col < cols; col++) {
        total += matrix[row][col];
        prefixSum[row][col] = total;
      }
    }
    return prefixSum;
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
