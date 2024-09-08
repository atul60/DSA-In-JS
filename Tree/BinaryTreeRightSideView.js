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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    const queue = [];
    const arr = []
    let level = 1;
    queue.push([root, level]);
    while(queue.length > 0) {
        let [node, currLevel] = queue.shift();
        if(node.left) {
            queue.push([node.left, currLevel+1]);
        }
        if(node.right) {
            queue.push([node.right, currLevel+1])
        }
        if(!queue[0]) {
            arr.push(node.val);
        } else {
            let nextLevel = queue[0][1];
            if(nextLevel > currLevel) {
                arr.push(node.val);
            }
        }
    }
    return arr;
};