class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0 ; 
        let  r = heights.length - 1; 
        let res = 0 ; 
        while(l <= r){
            let area = Math.min(heights[l],heights[r]) * (r - l);
            if(heights[l] <= heights[r])l +=1;
            else{
                r-=1
            }
            res = Math.max(area,res)
        }
        return res 
    }
}
