/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

let result = []
var combine = function(n, k) {
    result = [];
    getAllCombination(1, n, k, []);
    return result;
};

const getAllCombination = (start, n, k, partialResult) => {
    if(k == 0) {
        result.push([...partialResult]);
        return;
    };
    let partialResult1 = [...partialResult];
    for(let i=start; i<=n; i++) {
            partialResult1 = [...partialResult, i]
            getAllCombination(i+1, n, k-1, partialResult1);
    }
    return;
}