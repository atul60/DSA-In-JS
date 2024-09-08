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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const inOrderArr = preorderTraverse(root, []);
    return inOrderArr[k-1];
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