class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0 ; 
        for(let i = 0 ; i <heights.length;i++){
            for(let j = 0 ; j <heights.length;j++){
            let area = Math.min(heights[i],heights[j]) * (i - j)
            res = Math.max(res,area)

            }
         
        }
           return res
    }
    
}
