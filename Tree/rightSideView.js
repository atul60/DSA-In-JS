/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Returns the values visible from the right side of a binary tree.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    return LevelOrderRightSideView(root);
};

function LevelOrderRightSideView(root) {
    // Return an empty array if the tree is empty.
    if (!root) return [];

    // Stores the final right-side view.
    const result = [];

    // Queue for level-order (BFS) traversal.
    // Each element contains: [node, level]
    const queue = [];

    // Tracks the previous node's level.
    let prevLevel = 0;

    // Tracks the last node visited in the current level.
    let prevNode = root;

    // Start BFS with the root at level 0.
    queue.push([root, 0]);

    while (queue.length > 0) {
        // Remove the front node from the queue.
        const [node, currLevel] = queue.shift();

        // Add left child to the queue.
        if (node.left) queue.push([node.left, currLevel + 1]);

        // Add right child to the queue.
        if (node.right) queue.push([node.right, currLevel + 1]);

        // If we've moved to a new level,
        // the previously visited node was the last node
        // of the previous level (i.e., the rightmost node).
        if (prevLevel != currLevel) {
            result.push(prevNode.val);
            prevLevel = currLevel;
        }

        // Update the last visited node.
        prevNode = node;
    }

    // Add the last node of the final level.
    result.push(prevNode.val);

    return result;
}