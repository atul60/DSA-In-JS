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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    return combineTree(root).start;
};

function combineTree(tempRoot) {
    if(!tempRoot) return {start: null, end: null};
    const leftTree = combineTree(tempRoot.left);
    const rightTree = combineTree(tempRoot.right);
    if (leftTree.start) {
        tempRoot.right = leftTree.start;
        tempRoot.left = null;
        if (leftTree.end) leftTree.end.right = rightTree.start;
        return { start: tempRoot, end: rightTree.end };
    } else {
        tempRoot.right = rightTree.start;
        return { start: tempRoot, end: rightTree.end || tempRoot };
    }
}