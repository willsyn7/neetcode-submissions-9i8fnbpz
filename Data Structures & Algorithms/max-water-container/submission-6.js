class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
     let l = 0 ;
     let r = heights.length -1 ;
     let area = 0 ;
     while(l < r){
        const curr = Math.min(heights[l],heights[r]) * (r - l )
        area = Math.max(area,curr)
    if(heights[l] >= heights[r] ){
        r -=1
    }else {
        l+=1;
    }
     }
    return area 
    }
}
