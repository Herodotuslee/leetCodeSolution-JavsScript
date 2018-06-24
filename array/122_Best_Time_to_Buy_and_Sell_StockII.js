/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profits = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profits =profits+ (prices[i] - prices[i - 1]);
        }
    }
    return profits;
};
