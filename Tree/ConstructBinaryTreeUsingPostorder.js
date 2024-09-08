/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = new Map();
    const len = inorder.length;
    for(let i=0; i<len; i++) {
        map.set(inorder[0], i);
    }
    return cunstructTree(0, postorder.len-1, postorder, inorder, map);
};

let postorderIndex = postorder.len-1;

const cunstructTree = (startIdx, endIdx, postorder, inorder, map) => {
    if(startIdx > endIdx) return null;
    let nodeData = postorder[postorderIndex--];
    let newNode = new TreeNode(nodeData, null, null);
    if(startIdx == endIdx) return newNode;
    let nodeIndex = map.get(newNode)
    newNode.right = cunstructTree(nodeIndex+1, endIdx, postorder, inorder);
    newNode.left = cunstructTree(startIdx, nodeIndex-1, postorder, inorder);
    return newNode;
}
