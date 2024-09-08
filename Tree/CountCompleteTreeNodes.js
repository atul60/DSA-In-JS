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
var countNodes = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    let leftCount = 0, rightCount = 0;
    if(root.left) leftCount = countNodes(root.left);
    if(root.right) rightCount = countNodes(root.right);
    return leftCount + rightCount + 1;
};