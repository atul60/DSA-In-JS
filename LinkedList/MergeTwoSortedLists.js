/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1 = list1;
    let head2 = list2;
    let ptr1 = list1;
    let ptr2 = list2;
    let temp;
    while(ptr1 && ptr2) {
        if(head1.val < head2.val) {
            head2 = head2.next;
            ptr1.next = ptr2;
            ptr2.next = head1;
            head1 = ptr1;
            ptr2 = head2;
        } else if(ptr1.next.val < ptr2.val) {
            temp = ptr2;
            ptr2 = ptr2.next;
            temp.next = ptr1.next;
            ptr1.next = temp;
        } else {
            ptr1 = ptr1.next;
        }
    }
    if(ptr2) {
        ptr1 = head1;
        while(ptr1 && ptr1.next) {
            ptr1 = ptr1.next;
        }
        ptr1.next = ptr2;
    }
    return head1;
};