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
var isSymmetric = function(root) {
    return isSymetricTree(root.left, root.right);
};

function isSymetricTree(root1, root2) {
    if(!root1 || !root2) {
        if(root1 === root2) {
            return true;
        } else return false;
    }
    if(root1.val === root2.val) 
        return isSymetricTree(root1.left, root2.right) && isSymetricTree(root1.right, root2.left);
}