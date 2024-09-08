/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let len = 0;
    let temp = head, prevNode1;
    while(temp) {
        temp = temp.next;
        len++;
    }
    const possibleIteration = Math.floor(len/k);
    for(i=1; i<=possibleIteration; i++) {
        if(!temp) {
            [head, prevNode1, temp] = reverseBetween(null, head, head, k);
        } else {
            [head, prevNode1, temp] = reverseBetween(prevNode1, head, temp, k);
        }
    }
    return head;
};


var reverseBetween = function(prevNode1, head, startWith, k) {
    let prevNode2 = prevNode1, temp = startWith, startPrev = prevNode1;
    while(i <= k) {
        prevNode1 = temp;
        temp = temp.next;
        prevNode1.next = prevNode2;
        prevNode2 = prevNode1;
        i++;
    }
    startWith.next = temp;
    if(startPrev) {
        startPrev.next = prevNode1;
    } else {
        head = prevNode1;
    }
    return [head, prevNode1, temp];
};