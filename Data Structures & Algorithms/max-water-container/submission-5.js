class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    let l = 0 ;
    let r = heights.length - 1 ; 
    let area = 0 ; 
    while(l < r){
      let curr = Math.min(heights[l],heights[r]) * (r - l );
      area = Math.max(curr,area);
      console.log(area,`-area`)
      if(heights[l]<= heights[r]) l +=1 ; 
      else { r -=1} ;
     
    }
    return area 
    }
}
