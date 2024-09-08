//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const map = new Map();
var buildTree = function(preorder, inorder) {
    const len = inorder.length;
    for(let i=0; i<len; i++) {
        map.set(inorder[i], i);
    }
    return cunstructTree(0, len-1, preorder, inorder);
};

let preorderIndex = 0;

const cunstructTree = (startIdx, endIdx, preorder, inorder) => {
    if(startIdx > endIdx) return null;
    let nodeData = preorder[preorderIndex++];
    let newNode = new TreeNode(nodeData);
    if(startIdx == endIdx) return newNode;
    let nodeIndex = map.get(nodeData)
    newNode.left = cunstructTree(startIdx, nodeIndex-1, preorder, inorder);
    newNode.right = cunstructTree(nodeIndex+1, endIdx, preorder, inorder);
    return newNode;
}

const preorder = [-1];
const inorder = [-1];
console.log(buildTree(preorder, inorder));
