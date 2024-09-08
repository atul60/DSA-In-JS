
function MathChallenge(N) {
      let result = 0;
      const digits = Array.from(String(N), Number);
      const permutations = permute(digits);
      for (let perm of permutations) {
        if (isPrime(Number(perm.join('')))) {
            result = 1;
            break;
        }
      }
    
      return result;
}

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function permute(nums) {
    if (nums.length === 0) {
      return [[]];
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
      const remainingPermutations = permute(remaining);
      for (let j = 0; j < remainingPermutations.length; j++) {
        const permutation = [current].concat(remainingPermutations[j]);
        result.push(permutation);
      }
    }
    return result;
  }

let N = 18;
console.log(MathChallenge(N));
