/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const len = nums.length;
    if (len == 1) return [nums];
    nums.sort((a, b) => a - b); // Sorting to make duplicate checks possible
    const result = [];
  
    function backtrack(newArr, level) {
      if (level == len) {
        result.push([...newArr]);
      }
      const seen = new Set(); // Track values we've used at this level
      for (let i = level; i < len; i++) {
      //     if(i > level && newArr[i] == newArr[level]) continue;
      if (seen.has(newArr[i])) continue; // Skip duplicates at the same level
  
        seen.add(nums[i]);
        swap(newArr, level, i);
        backtrack(newArr, level + 1);
        swap(newArr, level, i);
      }
    }
  
    backtrack(nums, 0);
    return result;
  };
  
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };