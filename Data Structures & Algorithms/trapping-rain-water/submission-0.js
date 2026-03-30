class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) {
            return 0;
        }

        let l = 0 ; 
        let r = height.length -1 ; 
        let lmax = height[l];
        let rmax = height[r];
        let res = 0 ; 
        while(l <r){
            if(lmax < rmax){
                l +=1
                lmax = Math.max(height[l], lmax)
                res += lmax - height[l]
            }else{
                r -=1;
                rmax = Math.max(height[r], rmax);
                res += rmax - height[r]
            }

        }
        return res

    }
}
