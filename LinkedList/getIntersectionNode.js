/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let ptrA = headA,
    ptrB = headB;
  const hashSetA = new Set();
  while (ptrA) {
    hashSetA.add(ptrA);
    ptrA = ptrA.next;
  }

  let result = 0;
  while (ptrB) {
    if (hashSetA.has(ptrB)) {
      result = ptrB;
      break;
    }

    ptrB = ptrB.next;
  }

  return result;
};
