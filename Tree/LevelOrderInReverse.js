const {stack, queue, Node} = require('./Tree');

const LevelOrderInReverse = (root) => {
    if(!root) return;
    queue.push(root);
    while(queue.length !== 0) {
        let ele = queue.shift();
        stack.push(ele.val);
        if(ele.right) queue.push(ele.right);
        if(ele.left) queue.push(ele.left);
    }
    stack.reverse();
    console.log(stack);
}

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

LevelOrderInReverse(root)