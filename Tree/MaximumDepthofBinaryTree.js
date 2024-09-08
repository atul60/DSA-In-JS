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

function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    if(!root) return 0;
    maxDepthCount(root, 1, 1);
};

function maxDepthCount(temp) {
    if(temp) return 0;
    return Math.max(maxDepthCount(temp.left), maxDepthCount(temp.right)) + 1;
}

