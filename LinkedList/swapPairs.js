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
var swapPairs = function (head) {
  let ptr = head;
  while (ptr != null && ptr.next !== null) {
    swap(ptr);
    ptr = ptr.next.next;
  }

  return head;
};

function swap(ptr) {
  [ptr.val, ptr.next.val] = [ptr.next.val, ptr.val];
}
