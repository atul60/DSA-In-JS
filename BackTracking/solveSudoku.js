/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  completeBoard(board);
};

function completeBoard(board, row, column, box) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != ".") {
        continue;
      }
      for (let k = 1; k < 10; k++) {
        const valid = isValidNumber(board, i, j, k);
        if (!valid) continue;
        board[i][j] = `${k}`;
        let correctFill = completeBoard(board);
        if (correctFill) return true;
        board[i][j] = ".";
      }
      return false;
    }
  }

  return true;
}

function isValidNumber(board, row, column, num) {
  //Row and Column
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num || board[i][column] == num) return false;
  }

  //Cube
  const cubeRow = Math.floor(row / 3);
  const cubeColumn = Math.floor(column / 3);
  for (let i = cubeRow * 3; i < cubeRow * 3 + 3; i++) {
    for (let j = cubeColumn * 3; j < cubeColumn * 3 + 3; j++) {
      if (board[i][j] == num) return false;
    }
  }

  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(solveSudoku(board));
