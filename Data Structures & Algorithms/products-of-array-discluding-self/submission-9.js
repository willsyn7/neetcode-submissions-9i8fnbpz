class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let l = nums.length ; 
        const output = new Array(l).fill(1);
        for(let i = 1 ; i < nums.length ;i++){
            output[i] = output[i - 1] * nums[i -1]
        }
        let post = 1 ; 
        for(let i = l -1 ; i >= 0 ; i--){
            output[i] *= post ; 
            post *= nums[i]
        }
          return output
    }
  
}
