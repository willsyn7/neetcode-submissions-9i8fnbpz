class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     *  //1.Declar a constant viriable and assign it to the vlaue of hte
     * 2. Declare a constant viriabled called lenght and asisign to
     * the vlaue of hte arugments length nums annd Declare an 
     * array fileld with 1s that is the same lefnth as the arg array
     * 3. Declare a for loop to itterete through the the nusm array starting
     * form the value of 1 insead of 0 multiply the value of hte 
     * 4.
     * 
     */
    productExceptSelf(nums) {

        //pre 
        let l = nums.length ; 
        let output = new Array(l).fill(1);
        for(let i = 1 ; i < nums.length ; i++){
            output[i] = nums[i - 1]  * output[i - 1];
        }
        let postfix = 1 ; 
        for(let i = l - 1 ; i >= 0 ; i-- ){
            output[i] *= postfix
            postfix *= nums[i]; 
        }
  return output       
  

    }
}
