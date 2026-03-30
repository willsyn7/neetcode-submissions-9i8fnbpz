class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if(nums === [] || nums.length === 0 )return 0; 

      let set1 = new Set(nums);
      let max = 1 ; 
      for(let i = 0 ;i < nums.length ; i++){
        let count = 0 ;  
        let add = 0 ; 
        while(set1.has(nums[i] + add)){
            count +=1; 
            add +=1
        }
        max = Math.max(count,max)
      }
         return max 
}
    }
 
