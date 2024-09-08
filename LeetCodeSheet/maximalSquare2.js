var maximalSquare = function(matrix) {
    if(matrix == [[]]) {
        return 0;
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    let maxValue = 0;
    for(let i=0; i<columns; i++) {
        if(matrix[0][i] == '1') {
            maxValue = 1;
            break;
        }
    }
    for(let i=0; i<rows; i++) {
        if(matrix[i][0] == '1') {
            maxValue = 1;
            break;
        }
    }
    for(let i=1; i<rows; i++) {
        for(let j=1; j<columns; j++) {
            if(matrix[i][j] !== "0") {
                maxValue = maxValue === 0 ? 1 : maxValue;
                matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1;
            }
            maxValue = Math.max(maxValue, matrix[i][j]);
        }
    }
    return maxValue*maxValue;
}

const matrix = [["0","1"],["1","0"]];
console.log(maximalSquare(matrix));

// ["1","0","1","0","0"]
// ["1","0","1","1","1"]
// ["1","1","1","1","1"]
// ["1","0","0","1","0"]