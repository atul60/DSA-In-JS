/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1st Method
/* var permute = function(nums) {
    const result = []
    const removeItem = (arr, item) => {
        const result = [];
        for(let num of arr) {
            if(num != item) {
                result.push(num);
            }
        }
        return result;
    }
    const allPossibleCombination = (remainArr, partialComb) => {
        if(remainArr.length == 0) {
            result.push(partialComb);
            return;
        }
        for(let num of remainArr) {
            let newArr = removeItem(remainArr, num);
            allPossibleCombination(newArr, [...partialComb, num]);
        }
    }
    allPossibleCombination(nums, []);
    return result;
}; */

//Better Method
/**
 * Generates all possible permutations of an array of numbers.
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - An array containing all permutations.
 */
var permute = function (nums) {
  const len = nums.length;

  // Base case: if there's only one element, return it as the only permutation
  if (len == 1) return [nums];

  const result = [];

  /**
   * Helper function that uses backtracking to generate permutations.
   * @param {number[]} newArr - The array being permuted.
   * @param {number} level - The current index being fixed.
   */
  function backtrack(newArr, level) {
    // If the current level has reached the length of the array, a full permutation has been formed
    if (level == len) {
      result.push([...newArr]); // Add a copy of the current permutation to the result
    }

    for (let i = level; i < len; i++) {
      // Swap the current index with the iteration index to fix a new element at 'level'
      swap(newArr, level, i);

      // Recurse to fix the next element
      backtrack(newArr, level + 1);

      // Backtrack: restore the array to its previous state
      swap(newArr, level, i);
    }
  }

  // Start the backtracking process from index 0
  backtrack(nums, 0);

  return result;
};

/**
 * Swaps two elements in an array.
 * @param {any[]} arr - The array.
 * @param {number} indx1 - Index of the first element.
 * @param {number} indx2 - Index of the second element.
 */
const swap = (arr, indx1, indx2) => {
  [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
};

const a = [1, 2, 3];
permute(a);
