class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length ; 
        let output = new Array(n).fill(1);

        for(let i = 1 ; i< nums.length ;i++){
            output[i] = nums[i -1] * output[i -1];
        }
        let post =  1; 
        for(let i = n - 1 ; i >= 0 ; i--){
            output[i] *= post;
            post *=  nums[i]
        }
        return output 

    }
}
