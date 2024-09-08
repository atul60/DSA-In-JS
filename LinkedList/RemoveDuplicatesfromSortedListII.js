/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let temp = head, prev = null, ptr;
    while(temp) {
        if(temp.next && temp.val === temp.next.val) {
            while(temp.next && temp.val === temp.next.val) {
                temp = temp.next;
            }
            if(prev) {
                head = temp.next;
                prev = head;
            } else {
                prev.next = temp.next;
            }
            temp = temp.next;
        } else {
            prev = temp;
            temp = temp.next;
        }
    }
    return head;
};