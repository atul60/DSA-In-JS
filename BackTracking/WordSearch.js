/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const columns = board[0].length;
    let newArr = Array(columns).fill(false);
    const isVisited = Array(rows).fill([...newArr]);
    checkWord(0, 0, board, word, isVisited, rows, columns);
};

function checkWord(row, column, board, word, isVisited, rows, columns) {
    if((row > rows-1) || (column > columns-1) || isVisited[row][column]) return;
    if(board[row][column] == word.charAt(0)) {
        isVisited[row][column] = true;
        while() {
            checkWord(row+1, column, board, word.substring(1), isVisited, rows, columns);
        }
     }
}   

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED";