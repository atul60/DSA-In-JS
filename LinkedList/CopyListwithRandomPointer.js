/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let newHead = null;
    let temp = head, newNode, prevNode=null;
    const map = new Map();
    while(temp) {
        // newNode = new Node(temp.val, null, null);
        if(!newHead) {
            newHead = new Node(temp.val, null, null);
            prevNode = newHead;
        } else {
            prevNode.next = new Node(temp.val, null, null);
            prevNode = prevNode.next;
        }
        map.set(temp, prevNode);
        temp = temp.next;
    }
    temp = head;
    let newParentNode, newChildNode;
    while(temp) {
        newParentNode = map.get(temp);
        newChildNode = map.get(temp.random);
        newParentNode.random = newChildNode
        temp = temp.next;
    }
    return newHead;
};

