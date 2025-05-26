/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let ptr1 = (ptr2 = head);
  while (ptr1 !== null && ptr2 !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next && ptr2.next.next;
    if (ptr1 && ptr2 && ptr1 === ptr2) return true;
  }
  return false;
};
