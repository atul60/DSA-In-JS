
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 };


//  * @param {Node} node
//  * @return {Node}
//  */
var cloneGraph = function(node) {
    if(!node) return [];
    const queue = [];
    queue.push(node);
    const map = new Map();
    while(queue.length) {
        let currNode = queue.shift();
        let cloneNode = new Node(currNode.val);
        map.set(currNode, cloneNode);
        currNode.neighbors.forEach(neighbor => {
            if(!map.has(neighbor)) {
                queue.push(neighbor);
            } else {
                cloneNode.neighbors.push(map.get(neighbor));
                map.get(neighbor).neighbors.push(cloneNode);
            }
        })

    }
    return map.get(node);  
};