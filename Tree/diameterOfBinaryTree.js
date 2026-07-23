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
let maxDia = 0;
var diameterOfBinaryTree = function(root) {
    maxDia = 0;
    getMaxDiameter(root);
    return maxDia;
};

function getMaxDiameter(node) {
    if(!node) return 0;
    const leftHeight = getMaxDiameter(node.left);
    const rightHeight = getMaxDiameter(node.right);
    const currHeight = Math.max(leftHeight, rightHeight) + 1;
    const currDia = leftHeight + rightHeight;
    maxDia = Math.max(maxDia, currDia);
    return currHeight;
}