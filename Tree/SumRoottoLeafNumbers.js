/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function Node(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

let total = 0;
var sumNumbers = function(root) {
    if(root == null) return 0;
    totalSum(root, root.val);
    return total;
};

function totalSum(root, sum) {
    if(root.left == null && root.right == null) {
        total += sum;
        return;
    }
    if(root.left) {
        totalSum(root.left, sum*10+root.left.val);
    }
    if(root.right) {
        totalSum(root.right, sum*10+root.right.val);
    }
}

var root = new Node(4);
root.left = new Node(9);
root.right = new Node(0);
root.left.left = new Node(5);
root.left.right = new Node(1);

console.log(sumNumbers(root));