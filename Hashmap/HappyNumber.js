/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    let rem, sum = 0;
    while(!set.has(n)) {
        set.add(n);
        sum = 0;
        while(n !== 0) {
            rem = n%10;
            n = Math.floor(n/10);
            sum += rem*rem;
        }
       if(sum === 1)
        return true;
       n = sum;
    }
    return false;
};
console.log(isHappy(19));