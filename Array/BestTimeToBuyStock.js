/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0], profit=0;
    prices.forEach((price) => {
        if(min > price)
            min = price;
        if(profit < (price - min))
            profit = price - min 
    })
    return profit;
};