/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let box;
    let result = true;
    let num;
    const set = new Set();
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            num = board[i][j];
            if(num === '.' || num === ',') {
                continue;
            }
            box = (Math.floor(i/3))*3 + Math.floor(j/3);
            if(set.has(`row+${i}+${num}`) || set.has(`col+${j}+${num}`) || set.has(`box${box}+${num}`)) {
                result = false;
                break;
            } else {
                set.add(`row+${i}+${num}`);
                set.add(`col+${j}+${num}`);
                set.add(`box${box}+${num}`);
            }
        }
        if(!result)
            break;
    }
    return result;
};

const board =
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board));