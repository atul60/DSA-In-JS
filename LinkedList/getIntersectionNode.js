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

  let result = null;
  while (ptrB) {
    if (hashSetA.has(ptrB)) {
      result = ptrB;
      break;
    }

    ptrB = ptrB.next;
  }

  return result;
};

// [Expected Approach - 1] Using difference in node counts - O(m + n) Time and O(1) Space

var getIntersectionNode = function (headA, headB) {
  let aCount = 0,
    bCount = 0;

  let ptrA = headA,
    ptrB = headB;
  while (ptrA || ptrB) {
    if (ptrA) {
      ptrA = ptrA.next;
      aCount++;
    }
    if (ptrB) {
      ptrB = ptrB.next;
      bCount++;
    }

    if (!(ptrA || ptrB)) {
      break;
    }
  }

  let bigListPtr = aCount > bCount ? headA : headB;
  let smallListPtr = aCount > bCount ? headB : headA;

  for (let i = 0; i < Math.abs(aCount - bCount); i++) {
    bigListPtr = bigListPtr.next;
  }

  while (bigListPtr != smallListPtr) {
    bigListPtr = bigListPtr.next;
    smallListPtr = smallListPtr.next;
  }

  return bigListPtr;
};
