/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let maxSum;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    // Stores the maximum path sum found anywhere in the tree.
    maxSum = Number.NEGATIVE_INFINITY;

    // Perform DFS traversal to compute maximum path sums.
    getMaxSum(root);

    return maxSum;
};

function getMaxSum(root) {

    // Base case:
    // A null node contributes nothing to a path, so return negative infinity
    // to ensure it is never chosen over an actual node value.
    if (!root) {
        return Number.NEGATIVE_INFINITY;
    }

    // Recursively compute the maximum downward path sum
    // starting from the left and right child.
    const leftMax = getMaxSum(root.left);
    const rightMax = getMaxSum(root.right);

    // Maximum path starting at the current node that can be
    // extended to its parent (only one branch can be chosen).
    const sectionResult = Math.max(
        leftMax + root.val,
        rightMax + root.val,
        root.val
    );

    // Update the global maximum considering:
    // 1. A path passing through the current node (left -> root -> right)
    // 2. Current node + left branch
    // 3. Current node + right branch
    // 4. Current node alone
    maxSum = Math.max(
        maxSum,
        leftMax + root.val + rightMax,
        leftMax + root.val,
        rightMax + root.val,
        root.val
    );

    // Return the best extendable path to the parent.
    return sectionResult;
}