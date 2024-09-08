/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    return maxSum(root);
};

function maxSum(root) {
    if(root.left == null && root.right == null) return root.val;
    let maxLeft, maxRight;
    if(root.left != null) {
        maxLeft =  maxSum(root.left) 
    };
    if(root.right != null) {
        maxRight =  maxSum(root.right) 
    };
    let max; 
    if(maxLeft && maxRight) max = Math.max(maxLeft, maxLeft + root.val, maxRight, maxRight+root.val, maxLeft+root.val+maxRight);
    else if(maxLeft) max = Math.max(maxLeft, root.val, maxLeft+root.val);
    else max = Math.max(root.val, maxRight, root.val+maxRight);
    return max;
}