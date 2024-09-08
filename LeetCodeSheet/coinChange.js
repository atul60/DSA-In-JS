var coinChange = function(coins, amount) {
    const minCoins = [...new Array(amount+1)].fill(Infinity);
    minCoins[0] = 0;
    for(let i=1; i<amount+1; i++) {
        for(let coin of coins) {
            if(i-coin>=0) {
                minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i-coin]);
            } 
        }
    }
    return minCoins[amount] == Infinity ? -1 : minCoins[amount];
};

const coins = [2];
const amount = 3;
console.log(coinChange(coins, amount));