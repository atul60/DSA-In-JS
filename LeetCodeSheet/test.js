function longestArithmeticSubsequence(nums) {
    const n = nums.length;
    const dp = Array(n).fill().map(() => Array(n).fill(2));
    const diffMap = new Map();
  
    let maxLen = 2;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        const diff = nums[i] - nums[j];
        if (diffMap.has(diff)) {
          const prevIndex = diffMap.get(diff);
          dp[i][diff] = dp[prevIndex][diff] + 1;
        }
        maxLen = Math.max(maxLen, dp[i][diff]);
      }
      diffMap.set(nums[i], i);
    }
  
    return maxLen;
  }
  
  // Example test cases
  console.log(longestArithmeticSubsequence([3, 6, 9, 12])); // Output: 4
  console.log(longestArithmeticSubsequence([9, 4, 7, 2, 10])); // Output: 3
  console.log(longestArithmeticSubsequence([20, 1, 15, 3, 10, 5, 8]));