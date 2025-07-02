/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = nums;
  let total = 0;
  this.prefixSum = nums.map((item) => (total += item));
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let total = this.prefixSum[right] - this.prefixSum[left] + this.arr[left];
  return total;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
