/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let profit = 0; 
    for(; i<prices.length-1; i++) {
        prices[i] = prices[i+1] - prices[i];
    }
    prices[i] = -1;
    prices.forEach((num) => {
        if(num>0) profit += num;
    })
    return profit;
};