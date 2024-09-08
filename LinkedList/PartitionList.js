/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) 
        return head;
    let head2 = null;
    let temp1 = null, temp2 = null;
    let lessX = true;
    while(temp1 && temp2 && temp1.next && temp2.next) {
        if(lessX) {
            if(temp1.next.val < x) {
                temp1 = temp1.next;
            } else {
                lessX = false;
                if(!temp2) {
                    temp2 = temp1.next;
                } else {
                    temp2.next = temp1.next;
                    temp2 = temp2.next;
                } 
            }
        } else {
            if(!temp2) {
                temp2 = temp1.next;
            } else {
                if(temp2.next.val > x) {
                    temp2 = temp2.next;
                } else {
                    lessX = true;
                    temp1.next = temp2.next;
                    temp1 = temp1.next;
                }
            } 
        }
    }
    return head;
};