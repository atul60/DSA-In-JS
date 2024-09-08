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
var averageOfLevels = function(root) {
    const queue = [];
    queue.push([root, 1]);
    const average = [];
    let level = 1;
    let sum = 0, count = 0;
    while(queue.length > 0) {
        const [node, currLevel] = queue.shift();
        if(currLevel === level) {
            sum += node.val;
            count++;
        } else {
            level++;
            average.push(sum/count);
            count = 1;
            sum = node.val;
        }
        if(node.left) queue.push([node.left, currLevel+1]);
        if(node.right) queue.push([node.right, currLevel+1]);
        if(!queue[0]) average.push(sum/count);
    }
    return average;
};