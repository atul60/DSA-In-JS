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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    return isSumExist(root, targetSum-root.val);
};

function isSumExist(root, targetSum) {
    if(targetSum === 0 && root.left == null && root.right == null) {
        return true;
    } 
    else if(root.left == null && root.right == null) {
        return false;
    }
    let ansLeft=false, ansRight=false;
    if(root.left) {
        ansLeft = isSumExist(root.left, targetSum-root.left.val);
    }
    if(ansLeft) return ansLeft;
    if(root.right) {
        ansRight = isSumExist(root.right, targetSum-root.right.val);
    } 
    return ansRight;
}