class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0 ;
        let l = 0 ,r = height.length -1 ;
        let lmax = height[l], rmax = height[r];
        while(l < r){
            if(lmax < rmax){
                l+= 1;
                lmax = Math.max(height[l], lmax);
                res += lmax - height[l]
            }else{
                r--;
                rmax = Math.max(height[r], rmax);
                res += rmax - height[r]
             }
            
        }
        return res;
    }
}
