/**
 * Generate all combinations of well-formed parentheses
 * @param {number} n - number of pairs of parentheses
 * @return {string[]} - list of valid parentheses combinations
 */
var generateParenthesis = function (n) {
  // Start with one pair of parentheses
  let result = ["()"];
  const paren = "()";

  let i = 1;
  // Repeat until we've built up to n pairs
  while (i < n) {
    let newResult = [];
    for (let item of result) {
      // Generate all possible insertions of "()" into the current string
      const partResult = generateAllPossibleComb(item, paren);
      // Add them to the new result list
      newResult = [...newResult, ...partResult];
      // Remove duplicates using Set
      newResult = [...new Set(newResult)];
    }

    // Update result for next iteration
    result = newResult;
    i++;
  }
  return result;
};

/**
 * Insert a pair of parentheses "()" at every possible position in a string
 * @param {string} str - current parentheses string
 * @param {string} paren - "()" to insert
 * @return {string[]} - all possible new strings
 */
function generateAllPossibleComb(str, paren) {
  let result = [];
  for (let index in str) {
    // Insert "()" at position index
    let newStr = str.substring(0, index) + paren + str.substring(index);
    result.push(newStr);
  }
  return result;
}

// Example: generate all valid parentheses with 3 pairs
console.log(generateParenthesis(3));
