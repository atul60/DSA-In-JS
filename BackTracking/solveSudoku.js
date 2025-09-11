/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // Start the recursive backtracking solver
  completeBoard(board);
};

function completeBoard(board) {
  // Loop through every cell in the board
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // Skip already filled cells
      if (board[i][j] != ".") {
        continue;
      }

      // Try filling this empty cell with numbers 1–9
      for (let k = 1; k < 10; k++) {
        const valid = isValidNumber(board, i, j, k);

        if (!valid) continue; // If not valid, try the next number

        // Place the number tentatively
        board[i][j] = `${k}`;

        // Recursively attempt to solve the rest of the board
        let correctFill = completeBoard(board);

        if (correctFill) return true; // If solved, bubble up success

        // Otherwise, reset (backtrack) and try the next number
        board[i][j] = ".";
      }

      // If no number works in this cell, backtrack
      return false;
    }
  }

  // If we reach here, it means the entire board is filled correctly
  return true;
}

function isValidNumber(board, row, column, num) {
  // Check if `num` exists in the same row or column
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num || board[i][column] == num) return false;
  }

  // Check if `num` exists in the 3x3 subgrid
  const cubeRow = Math.floor(row / 3);
  const cubeColumn = Math.floor(column / 3);
  for (let i = cubeRow * 3; i < cubeRow * 3 + 3; i++) {
    for (let j = cubeColumn * 3; j < cubeColumn * 3 + 3; j++) {
      if (board[i][j] == num) return false;
    }
  }

  // If no conflicts, the number is valid here
  return true;
}
