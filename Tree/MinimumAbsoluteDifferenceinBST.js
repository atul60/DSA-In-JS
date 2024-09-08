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
var getMinimumDifference = function(root) {
    if(!root) return;
    const inOrderArr = inorderTraverse(root, []);
    let minDiff = Number.MAX_VALUE;
    for(let i=1; i<inOrderArr.length; i++) {
        minDiff = Math.min(minDiff, Math.abs(inOrderArr[i] - inOrderArr[i-1]));
    }
    return minDiff;
};

function inorderTraverse(node, inOrderArr) {
    if(!node.left && !node.right) {
        inOrderArr.push(node.val);
        return inOrderArr;
    }
    if(node.left) {
        inOrderArr = inorderTraverse(node.left, inOrderArr);
    }
    inOrderArr.push(node.val);
    if(node.right) {
        inOrderArr = inorderTraverse(node.right, inOrderArr);
    }
    return inOrderArr;
}