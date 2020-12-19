/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 if(prices.length === 0) return 0
    let answer = 0
    for(let i= 0;i<prices.length;i++) {
        for(let j =i;j<prices.length;j++) {
            if(prices[j] > prices[i] && prices[j] - prices[i] > answer) {
                answer = prices[j] - prices[i]
            }
        }
    }
    
    return answer

};

console.log(maxProfit([2,4,1]))