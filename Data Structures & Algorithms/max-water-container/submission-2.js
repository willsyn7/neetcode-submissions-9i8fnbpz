class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0 ;
        let r = heights.length -1 ;
        let area = 0 ;
        while(l <= r){
             // l x w 
        let currentarea = Math.min(heights[l],heights[r]) * (r - l)
        area = Math.max(currentarea,area);
        if(heights[l] <= heights[r] ) l +=1;
        else{
            r-=1
        }
        }
        return area 
    }
}
