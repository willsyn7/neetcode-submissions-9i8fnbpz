class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1 ;
        let max = 0 ; 

        while(l < r){
            let area = Math.min(heights[r], heights[l]) * (r - l );
            max = Math.max(area,max)
            if(heights[r] >= heights[l])l +=1;
            else{
                r-=1;
            }
        }
        return max 
    }
}
