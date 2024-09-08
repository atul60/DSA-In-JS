export function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

const stack = [];
const queue = [];
function inorder(tempRoot) {
    if(!tempRoot) return;
    if(tempRoot.left) inorder(tempRoot.left);
    stack.push(tempRoot.val);
    if(tempRoot.right) inorder(tempRoot.right);
}

function preorder(tempRoot) {
    if(!tempRoot) return;
    stack.push(tempRoot.val);
    if(tempRoot.left) preorder(tempRoot.left);
    if(tempRoot.right) preorder(tempRoot.right);
}

function levelOrderTraversal(root) {
    if(!root) return ;
    queue.push(root);
    while(queue.length !== 0) {
        let ele = queue.shift();
        stack.push(ele.val);
        if(ele.left) queue.push(ele.left);
        if(ele.right) queue.push(ele.right);
    }
}

module.exports = {Node, inorder, preorder, levelOrderTraversal, stack, queue};

var root = new Node(50);
root.left = new Node(25);
root.right = new Node(75);
root.left.left = new Node(12);
root.left.right = new Node(35);
root.left.left.right = new Node(20);
root.left.right.left = new Node(30);
root.left.right.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);
root.right.right.left = new Node(78);





