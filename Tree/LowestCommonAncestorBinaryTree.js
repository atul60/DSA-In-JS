/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const pathP = []
var lowestCommonAncestor = function(root, p, q) {
    // let pathP = [];
    // let pathQ = [];
    findPath(root, p);
    // findPath(root, q, pathQ);
    console.log(pathP);
};

function findPath(root, n) {
    pathP.push(root.val);
    if(root.val === n) return true;
    let ans = false;
    if(root.left) {
        ans = findPath(root.left, n);
    }
    if(root.right) {
        ans = ans || findPath(root.right, n);
    }
    if(!ans) pathP.pop();
    return ans; 
}