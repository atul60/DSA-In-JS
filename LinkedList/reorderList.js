var reorderList = function (head) {
  if (!head || !head.next) return;

  // Step 1: Find the middle of the list
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half
  let prev = null,
    curr = slow.next;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  // Cut the list into two halves
  slow.next = null;

  // Step 3: Merge the two halves
  let first = head,
    second = prev;
  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;

    first.next = second;
    second.next = tmp1;

    first = tmp1;
    second = tmp2;
  }
};
