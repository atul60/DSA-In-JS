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
var largestValues = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [];
    let prevLevel = 0;
    let largest = root.val;
    queue.push([root, 0]);

    while (queue.length > 0) {
        const [node, currLevel] = queue.shift();

        if (node.left) queue.push([node.left, currLevel + 1]);

        if (node.right) queue.push([node.right, currLevel + 1]);

        if (prevLevel != currLevel) {
            result.push(largest);
            prevLevel = currLevel;
            largest = node.val;
        }

        if(node.val > largest) {
            largest = node.val;
        }
    }

    result.push(largest);

    return result;
}