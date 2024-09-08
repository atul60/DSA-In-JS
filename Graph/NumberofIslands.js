/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    const m = grid.length, n = grid[0].length;
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] == 1) {
                islandCount++;
                DFS(i, j, grid, m, n)
            }
        }
    }
    return islandCount;
};

function DFS(i, j, grid, m, n) {
    grid[i][j] = 2;
    if(i != 0 && grid[i-1][j] == 1) {
        DFS(i-1, j, grid, m, n); 
    }
    if(j != n-1 && grid[i][j+1] == 1) {
        DFS(i, j+1, grid, m, n); 
    }
    if(i != m-1 && grid[i+1][j] == 1) {
        DFS(i+1, j, grid, m, n); 
    }
    if(j != 0 && grid[i][j-1] == 1) {
        DFS(i, j-1, grid, m, n); 
    }
}