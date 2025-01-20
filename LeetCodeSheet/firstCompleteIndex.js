/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let m = mat.length;
    let n = mat[0].length;
    const reverseArr = Array.from({length: n}).map(() => Array.from({length: m}).fill(0));
    const arrMap = {};
    mat.forEach((itemArr, i) => {
        itemArr.forEach((item, j) => {
            arrMap[item] = [i, j];
            reverseArr[j][i] = item;
        })
    })

    const rowCount = Array.from({length: m}).fill(0);
    const columnCount = Array.from({length: n}).fill(0);

    let result;
    arr.some((no, index) => {
        let [i, j] = arrMap[no]; 
        rowCount[i] += 1; 
        columnCount[j] += 1; 
        if(rowCount[i] == n || columnCount[j] == m) {
            result = index;
            return true;
        }
        return false;

    })
    return result;
    
};

const arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]];
console.log(firstCompleteIndex(arr, mat));