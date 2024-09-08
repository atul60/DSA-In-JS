/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const queue = [];
var connect = function(root) {
    if(!root) return null;
    queue.push([root, 0]);
    let currNode, currLevel;
    while(queue.length > 0) {
        [currNode, currLevel] = queue.shift();
        if(queue.length === 0 || currLevel < queue[0][1]) {
           currNode.next = null; 
        } else {
            currNode.next = queue[0][0]
        }
        currNode.left && queue.push([currNode.left, currLevel+1]);
        currNode.right && queue.push([currNode.right, currLevel+1]);
    }
    return root;
};