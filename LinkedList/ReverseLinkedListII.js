/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let temp = head, startNode, temp1=null;
    let prevNode1, prevNode2, nodeCount = 1;
    let i = 1;
    while(i !== left) {
        temp1 = temp;
        temp = temp.next; 
        i++;
    }
    startNode = temp;
    prevNode1 = null;
    prevNode2 = null;
    while(i <= right) {
        prevNode1 = temp;
        temp = temp.next;
        prevNode1.next = prevNode2;
        prevNode2 = prevNode1;
        i++;
    }
    startNode.next = temp;
    if(temp1) {
        temp1.next = prevNode1;
    } else {
        head = prevNode1;
    }
    return head;
};