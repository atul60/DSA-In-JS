/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let i = 0;
    let ahead = head, prev=null, temp=head;
    while(i<n) {
        temp = temp.next;
        i++;
    }
    while(temp) {
        prev = ahead;
        ahead = ahead.next;
        temp = temp.next
    }
    if(ahead == head)
        return head.next;
    prev.next = ahead.next;
    return head;
};
