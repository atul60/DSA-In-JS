/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const visited = [];
    const m = board.length;
    const n = board[0].length;
    for(let i=0; i<m; i++) {
        visited.push(new Array(n).fill(false));
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] == "O") {
                board[i][j] = "-";
            }
        }
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if((i==0 || i==m-1 || j==0 || j==n-1) && board[i][j] == "-") {
               BFS(i, j, m, n, board); 
            }
        }
    }

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] == "-") {
                board[i][j] = "X";
            }
        }
    }
    
};

function BFS(i, j, m, n, board) {
    board[i][j] = "O";
    if(i>0 && board[i-1][j] == "-") BFS(i-1, j, m, n, board);
    if(j<n-1 && board[i][j+1] == "-") BFS(i, j+1, m, n, board);
    if(i<m-1 && board[i+1][j] == "-") BFS(i+1, j, m, n, board);
    if(j>0 && board[i][j-1] == "-") BFS(i, j-1, m, n, board);
}

const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
console.log(solve(board));
console.log("board", board);