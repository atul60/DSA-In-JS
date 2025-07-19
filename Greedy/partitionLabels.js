/**
 * Given a string `s`, this function partitions the string into as many parts as possible
 * so that each letter appears in at most one part. It returns an array of integers
 * representing the size of these parts.
 *
 * @param {string} s - The input string
 * @return {number[]} - Array of partition sizes
 */
var partitionLabels = function (s) {
  // Step 1: Store the last occurrence index of each character
  const charPos = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charPos[char] = i; // Updates the position to the last occurrence
  }

  // A set to track characters in the current partition (not strictly needed here)
  const traverseSet = new Set();

  let start = 0; // Start index of the current partition
  const result = []; // Array to store sizes of partitions

  // Step 2: Traverse the string and create partitions
  while (start < s.length) {
    traverseSet.clear(); // Clear the set for the new partition
    let partialCount = 0; // Length of the current partition
    let i = start;
    let lastInd = start; // The farthest index this partition should go to

    // Expand the partition until we include the last occurrence of all characters seen
    while (i <= lastInd) {
      const char = s[i];
      traverseSet.add(char); // Track the character (optional)
      partialCount++;
      lastInd = Math.max(lastInd, charPos[char]); // Update the partition end if needed
      i++;
    }

    result.push(partialCount); // Store the size of this partition
    start = i; // Move to the start of the next partition
  }

  return result;
};
