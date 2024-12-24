/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 0) return 0;
    const differentWays = Array.from({length: n+1});
    differentWays[1] = 1;
    differentWays[2] = 2;
    for(let stair = 3; stair <= n; stair++) {
        differentWays[stair] = differentWays[stair-1] + differentWays[stair-2];
    }

    return differentWays[n];
};