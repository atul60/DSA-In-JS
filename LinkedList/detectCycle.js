/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const traversedNode = new Set();

  let ptr = head;
  while (ptr != null) {
    if (traversedNode.has(ptr)) {
      break;
    } else {
      traversedNode.add(ptr);
    }
    ptr = ptr.next;
  }
  return ptr;
};
