/**
 * Checks if any permutation of s1 is a substring of s2
 * @param {string} s1 - The pattern string
 * @param {string} s2 - The target string
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Len = s1.length; // Length of pattern
  const s2Len = s2.length; // Length of target

  // If s2 is shorter than s1, no permutation is possible
  if (s2Len < s1Len) return false;

  let left = 0; // Start of sliding window
  let right = 0; // End of sliding window

  const s1Obj = {}; // Frequency map of characters in s1

  // Fill frequency map for s1
  for (let ch of s1) {
    addItem(s1Obj, ch);
  }

  let currCh;
  // Start sliding the window over s2
  while (left < s2Len && right < s2Len) {
    // If all characters matched, break early
    if (Object.keys(s1Obj).length == 0) break;

    currCh = s2[right]; // Current character in s2

    // If current character exists in the map, decrement its count
    if (s1Obj[currCh]) {
      deleteItem(s1Obj, currCh);
      right++; // Expand window
    } else {
      // If not in map, shrink window from left until currCh is skipped
      while (s2[left] != currCh) {
        addItem(s1Obj, s2[left]); // Re-add skipped character back to map
        left++;
      }
      left++; // Move past currCh
      right++; // Expand window
    }
  }

  // If map is empty, a valid permutation was found
  if (Object.keys(s1Obj).length == 0) return true;
  return false;
};

/**
 * Adds an item to a frequency map (object)
 * @param {Object} obj - frequency map
 * @param {string} item - character to add
 */
function addItem(obj, item) {
  if (!obj[item]) {
    obj[item] = 0; // Initialize if not present
  }
  obj[item] += 1; // Increment count
  return obj;
}

/**
 * Deletes an item from a frequency map or decreases its count
 * @param {Object} obj - frequency map
 * @param {string} item - character to remove
 */
function deleteItem(obj, item) {
  if (!obj[item]) return obj; // Skip if not present
  if (obj[item] == 1) {
    delete obj[item]; // Remove key if count becomes 0
  } else {
    obj[item] -= 1; // Decrease count
  }
  return obj;
}
