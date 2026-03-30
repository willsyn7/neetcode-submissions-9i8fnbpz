class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length ;
        let numsarray = new Array(length).fill(1);
        console.log(numsarray)
        for(let i = 1 ; i< length;i++){
            numsarray[i] = numsarray[i - 1] * nums[i -1 ]
            console.log(numsarray[i])
        }
        console.log(numsarray)
        let post = 1 ; 
        for(let i = length - 1; i >= 0; i--){
         numsarray[i] *= post;
         post *= nums[i];
        }
        return numsarray;
        

    }
}
