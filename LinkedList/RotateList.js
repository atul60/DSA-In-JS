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
var rotateRight = function(head, k) {
    const len = 0;
    let temp = head;
    while(temp) {
        temp = temp.next;
        len++;
    }
    temp = head;
    let i=0, ptr=head;
    while(i !== k) {
        temp = temp.next;
        i++;
    }
    while(temp.next) {
        ptr = ptr.next;
        temp = temp.next;
    }
    temp.next = head;
    head = pte.next;
    ptr.next = null;
    return head;
};