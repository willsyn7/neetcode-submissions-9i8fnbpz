class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0 ;
        // let r = prices[prices.length - 1];
        let res = 0;     
        for(let r = 0 ; r < prices.length;r++){
            if(prices[r] < prices[l]){
                l = r;
            }else{
                res = Math.max((prices[r] - prices[l]), res);
            }
        }
        return res;
        
    }
}
