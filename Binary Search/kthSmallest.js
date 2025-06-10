/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
//incomplete
var kthSmallest = function (matrix, k) {
  const rowLen = matrix.length;
  const columnLen = matrix[0].length;

  let resultRowIndex = Math.ceil(k / columnLen) - 1;

  let partialSort;
  if (resultRowIndex == 0) {
    partialSort = [...matrix[resultRowIndex]];
  } else {
    partialSort = [...matrix[resultRowIndex - 1], ...matrix[resultRowIndex]];
  }

  if (resultRowIndex < rowLen - 1) {
    partialSort = [...partialSort, ...matrix[resultRowIndex + 1]];
  }

  partialSort = partialSort.sort((a, b) => a - b);

  if (resultRowIndex == 0) {
    return partialSort[k - 1];
  }
  return partialSort[k - columnLen * (resultRowIndex - 1) - 1];
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  k = 5;

console.log(kthSmallest(matrix, k));
