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
var isValidBST = function(root) {
    const inOrderArr = inorderTraverse(root, []);
    let isValid = true;
    let prevItem = inOrderArr[0];
    for(let i=1; i<inOrderArr.length; i++) {
        if(prevItem > inOrderArr[i]) {
            isValid = false;
        }
        if(!isValid) break;
        prevItem = inOrderArr[i];
    }
    return isValid;
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