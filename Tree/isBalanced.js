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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    const [_, isbalanced] = getDepthAndBalanced(root);
    return isbalanced
};

function getDepthAndBalanced(root) {
    if(!root) return [0, true];
    const [leftHeight, isLeftBalance] = getDepthAndBalanced(root.left);
    const [rightHeight, isRightBalance] = getDepthAndBalanced(root.right);
    if(!(isLeftBalance && isRightBalance)) return [, false]
    if(Math.abs(leftHeight - rightHeight) <= 1) return [Math.max(leftHeight, rightHeight) + 1, true];
    return [, false];
}