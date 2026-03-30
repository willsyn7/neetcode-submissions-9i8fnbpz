class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = Array(nums.length).fill(1);
          console.log(output)

        for(let i = 1 ; i < nums.length;i++){
             output[i] = nums[i -1] * output[i -1]
        }
console.log(output)
        let pre = 1 ; 
        for(let i = output.length -1 ; i >= 0 ; i--){
            console.log(`asdf`)
            output[i] *= pre;
            pre *= nums[i] 
            
        }
      return output 
        

    }
}
