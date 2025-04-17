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
var middleNode = function (head) {
  if (!head) return head;

  let slwPtr = head;
  let fstPtr = head;

  while (fstPtr != null && fstPtr.next != null) {
    slwPtr = slwPtr.next;
    fstPtr = fstPtr.next.next;
  }

  return slwPtr;
};
