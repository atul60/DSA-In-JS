/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const colums = board[0].length;
  let result = false;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < colums; column++) {
      //   board[row][column] = -1; // -1 means it is visited.
      result = searchNeighbour(board, row, column, word);
      if (result) {
        return result;
      }
    }
  }
  return result;
};

function searchNeighbour(board, row, column, word) {
  const isValid = isRowColumnValid(row, column, board.length, board[0].length);
  let result = false;
  if (isValid && board[row][column] != -1) {
    if (board[row][column] == word[0]) {
      board[row][column] = -1;
      let newWord = word.substring(1);
      if (newWord == "") return true;
      result =
        searchNeighbour(board, row - 1, column, newWord) ||
        searchNeighbour(board, row, column - 1, newWord) ||
        searchNeighbour(board, row + 1, column, newWord) ||
        searchNeighbour(board, row, column + 1, newWord);

      if (!result) {
        board[row][column] = word[0]; // backtrack
      }
    }
  }

  return result;
}

function isRowColumnValid(i, j, bottom, right) {
  return i > -1 && i < bottom && j > -1 && j < right;
}

const board = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];
word = "AAB";

console.log(exist(board, word));
