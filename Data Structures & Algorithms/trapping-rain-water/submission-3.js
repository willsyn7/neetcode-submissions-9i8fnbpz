class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * Intput : array  = arrray of int
     * Output : Int
     * Strratgey : Itterate through teh array useing a two pointer apporach, find the lesser of
     * the left max and right maxiimum and subtract it with the current value. If the value is greater
     * then 0 tthat means water can be stored in that index, you woudl take the lesser fo the minimiums
     * beucase you cant store water igigoially, it is subtracted from the current value becuase not all 
     * elemetns that can store water start at value 0, it can start height > 0, thus you woudl nee d
     * to accoutn for it 
     */
    trap(heights) {
        let l = 0; 
        let r = heights.length - 1; 
        let lmax = heights[l];
        let rmax = heights[r];
        let res = 0 ; 
        while(l < r){
            if(heights[l] < heights[r]){
                l+=1;
                lmax = Math.max(heights[l], lmax);
                res += lmax - heights[l]
            }
            else{
                r -= 1;
                rmax =Math.max(heights[r], rmax);
                res += rmax - heights[r];
            }
            
        }
        return res 
    }
}
