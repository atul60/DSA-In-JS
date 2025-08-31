function combinationSum2(candidates, target) {
  // Sort the candidates to help skip duplicates and improve efficiency
  candidates.sort((a, b) => a - b);

  const result = [];

  /**
   * Helper function for backtracking through candidates
   * @param {number[]} subset - Current combination being built
   * @param {number} start - Index to start from in the candidates array
   * @param {number} requiredSum - Remaining sum needed to reach the target
   */
  function backtrack(subset, start, requiredSum) {
    // Base case: if the required sum is exactly 0, we found a valid combination
    if (requiredSum == 0) {
      result.push([...subset]); // Add a copy of the subset to the result
      return true; // Signal that a valid combination was found
    }

    for (let i = start; i < candidates.length; i++) {
      // If the current number is greater than the remaining sum, no need to proceed further
      if (candidates[i] > requiredSum) break;

      // Skip duplicates to avoid generating the same combination multiple times
      if (i > start && candidates[i] == candidates[i - 1]) continue;

      // Include the current candidate in the subset
      subset.push(candidates[i]);

      // Recurse with updated values: move to next index and reduce required sum
      let subsetCompleted = backtrack(
        subset,
        i + 1, // move to next index to avoid reusing the same element
        requiredSum - candidates[i]
      );

      // Backtrack: remove the last element to explore other combinations
      subset.pop();

      // Early termination: stop exploring further if one valid combination is found
      if (subsetCompleted) return false;
    }
  }

  // Start the backtracking with an empty subset
  backtrack([], 0, target);

  return result;
}
