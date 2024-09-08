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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let currStack = [];
    let nextStack = [];
    let leftToRight = true;
    currStack.push(root);
    const result = [];
    let temp = [];
    while (currStack.length > 0) {
        let node = currStack.pop();
        temp.push(node.val);
        if(leftToRight) {
            if(node.left) nextStack.push(node.left); 
            if(node.right) nextStack.push(node.right); 
        } else {
            if(node.right) nextStack.push(node.right);
            if(node.left) nextStack.push(node.left);
        }
        if(currStack.length === 0) {
            currStack = nextStack;
            nextStack = [];
            leftToRight = !leftToRight;
            result.push([...temp]);
            temp = [];
        }
    }
    return result;
};