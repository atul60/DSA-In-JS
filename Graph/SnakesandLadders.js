/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const arr = [];
    const visited = new Set();
    let leftToRight = true;
    for(let i=n-1; i>=0; i--) {
        if(leftToRight) {
            for(let j=0; j<n; j++) {
               arr.push(board[i][j]) 
            }
        } else {
            for(let j=n-1; j>=0; j--) {
                arr.push(board[i][j]) 
             }
        }
        leftToRight = !leftToRight;
    }
    
    const bfs = () => {
        const queue = [[1, 0]];
        visited.add(1);
        while (queue.length) {
            const [current, stepCount] = queue.shift();
            if(current == n*n) return stepCount;
            for(let i=current+1; i<=Math.min(current+6, n*n); i++) {
                let destination = i;
                let nextStep = stepCount+1;
                if(arr[destination-1] != -1) {
                    destination = arr[destination-1];
                }
                if(!visited.has(destination)) {
                    queue.push([destination, nextStep]);
                    visited.add(destination);
                }
            }
        }
        return -1;
    }
    return bfs();
};

const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]];
snakesAndLadders(board);