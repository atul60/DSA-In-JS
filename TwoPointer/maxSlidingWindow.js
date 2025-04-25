/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  const mntDec = new MonotonicDec();
  for (let i = 0; i < k; i++) {
    mntDec.insertItem(nums[i], i);
  }

  const result = [];

  result.push(mntDec.peekBack()[1]);

  let wndStrInd = 0;
  for (let i = k; i < len; i++) {
    let currItem = nums[i];
    if (wndStrInd == mntDec.peekBack()[0]) {
      mntDec.popBack();
    }
    mntDec.insertItem(currItem, i);
    result.push(mntDec.peekBack()[1]);
    wndStrInd++;
  }

  return result;
};

class MonotonicDec {
  // back-> [4, 3, 2, 1, 0] <-front
  constructor() {
    this.stack = [];
  }

  insertItem(item, index) {
    let frontItem = this.peekFront() ? this.peekFront()[1] : undefined;
    while (frontItem != undefined) {
      if (item >= frontItem) {
        this.popFront();
      } else {
        this.pushFront(item, index);
        break;
      }
      frontItem = this.peekFront() ? this.peekFront()[1] : undefined;
    }
    if (frontItem == undefined) {
      this.pushFront(item, index);
    }
  }

  peekFront() {
    return this.stack.at(-1);
  }

  peekBack() {
    return this.stack[0];
  }

  popFront() {
    return this.stack.pop();
  }

  popBack() {
    const backItem = this.stack[0];
    this.stack = this.stack.slice(1);
    return backItem;
  }

  pushFront(item, index) {
    this.stack.push([index, item]);
  }

  pushBack(item, index) {
    this.stack.unshift([index, item]);
  }
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
let r = maxSlidingWindow(nums, k);
console.log(r);
