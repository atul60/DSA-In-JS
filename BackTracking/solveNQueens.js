/**
 * Solves the N-Queens problem using backtracking with optimized validation.
 *
 * @param {number} n - Size of the chessboard (n x n).
 * @return {string[][]} - A list of all valid solutions, where each solution
 *                        is represented as an array of strings.
 */
var solveNQueens = function (n) {
  // Initialize chessboard with "."
  const chessBoard = Array.from({ length: n }).map(() =>
    Array.from({ length: n }).fill(".")
  );

  // Array to collect all valid solutions
  const result = [];

  /**
   * We use three helper arrays to track attacks efficiently:
   * - col[j] → whether column j already has a queen
   * - leftDia[row - col] → whether left diagonal (↘) has a queen
   * - rightDia[row + col] → whether right diagonal (↙) has a queen
   *
   * Note:
   * - leftDia index range: [-(n-1), (n-1)], so we shift by +n for safe indexing
   * - rightDia index range: [0, 2n-2]
   */
  fillPosition(
    chessBoard,
    n,
    0,
    result,
    Array.from({ length: n }).fill("."), // columns
    Array.from({ length: 2 * n }).fill("."), // left diagonals
    Array.from({ length: 2 * n }).fill(".") // right diagonals
  );

  return result;
};

/**
 * Recursive backtracking to try placing queens row by row.
 *
 * @param {string[][]} board - Current chessboard configuration.
 * @param {number} n - Size of the chessboard.
 * @param {number} row - Current row index to place a queen.
 * @param {string[][]} result - Stores all valid solutions.
 * @param {string[]} col - Tracks used columns.
 * @param {string[]} leftDia - Tracks used left diagonals.
 * @param {string[]} rightDia - Tracks used right diagonals.
 */
function fillPosition(board, n, row, result, col, leftDia, rightDia) {
  // Base case: all queens are placed successfully
  if (row === board.length) {
    result.push(printResult(board));
    return;
  }

  // Try placing queen in each column of current row
  for (let j = 0; j < n; j++) {
    // Check if placing at (row, j) is valid
    const valid = isValid(board, row, j, col, leftDia, rightDia);
    if (!valid) continue;

    // Place queen
    board[row][j] = "Q";
    col[j] = "Q";
    leftDia[row - j + n] = "Q"; // shift by n to avoid negative index
    rightDia[row + j] = "Q";

    // Recurse for next row
    fillPosition(board, n, row + 1, result, col, leftDia, rightDia);

    // Backtrack (remove queen)
    board[row][j] = ".";
    col[j] = ".";
    leftDia[row - j + n] = ".";
    rightDia[row + j] = ".";
  }
}

/**
 * Check if a queen can be safely placed at (row, column).
 * O(1) check using column & diagonal arrays.
 *
 * @param {string[][]} board
 * @param {number} row
 * @param {number} column
 * @param {string[]} col
 * @param {string[]} leftDia
 * @param {string[]} rightDia
 * @return {boolean}
 */
function isValid(board, row, column, col, leftDia, rightDia) {
  let n = board.length;
  if (
    col[column] === "Q" ||
    leftDia[row - column + n] === "Q" ||
    rightDia[row + column] === "Q"
  ) {
    return false;
  }
  return true;
}

/**
 * Converts board matrix into an array of strings.
 * Example:
 * [ ['.', 'Q', '.'], ['.', '.', 'Q'], ... ]
 * becomes
 * [".Q.", "..Q", ...]
 *
 * @param {string[][]} board - Chessboard configuration.
 * @return {string[]} - Flattened string representation of board.
 */
function printResult(board) {
  let result = [];
  board.forEach((row) => {
    result.push(row.join(""));
  });
  return result;
}
