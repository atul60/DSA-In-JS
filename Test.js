/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const n = nums.length;
  const smallest = Array.from({length: n});
  const largest = Array.from({length: n});
  smallest[0] = nums[0];
  for(let i=1; i<n; i++) {
    if(nums[i] < smallest[i-1]) {
      smallest[i] = nums[i]
    } else {
      smallest[i] = smallest[i-1];
    }
  }

  largest[n-1] = nums[n-1];
  for(let i=n-2; i>=0; i--) {
    if(nums[i] > largest[i+1]) {
      largest[i] = nums[i]; 
    } else {
      largest[i] = largest[i+1];
    }
  }
    
  let i=1;
  while(i<n-1) {
    let leftConstraint = false, rightContraint = false;
    if(nums[i] > smallest[i-1]) leftConstraint = true;
    if(nums[i] < largest[i+1]) rightContraint = true;

    if(leftConstraint && rightContraint) {
      return true;
    }
    i++;
  }
  return false;
};

const nums = [3,3,3,2,0,1,1];
console.log(increasingTriplet(nums));