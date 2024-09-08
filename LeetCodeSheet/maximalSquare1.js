/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxArea = 0;
    let i=0, j=0;
    const rows = matrix.length;
    const columns = matrix[0].length;
    let jump = 0;
    let maxJump = 0;
    while(i != rows) {
        jump = 0;
        let area = 0;
        let size = 0;
        if(matrix[i][j] == 1) {
            size = 1;
            while(true) {
                let m = 1;
                if((j+size > columns-1 || i+size > rows-1)) {
                    break;
                }
                if(matrix[i][j+size] == 1) {
                    for(; m<=size; m++) {
                        if(matrix[i+m][j+size] != 1) {
                            break;
                        }
                    }
                    if(m != size+1){
                        jump = m;
                        break;
                    }
                    m--;
                    for(; m>0; m--) {
                        if(matrix[i+size][j+m-1] != 1) {
                            jump = m;
                            break;
                        }
                    }
                }
                if(m == 0) {
                    size++;
                } else {
                    break;
                }
            }
            area = size*size;
            maxArea = Math.max(area, maxArea);
        }
        j++;
        if(j == columns) {
            i++;
            j=0;
        }
    }
    return maxArea;
};

const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalSquare(matrix));