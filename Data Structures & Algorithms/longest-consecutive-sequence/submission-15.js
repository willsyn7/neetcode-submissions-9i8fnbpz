class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set1 = new Set(nums);
        let res = 0 
        for(const n of nums){
           if(!set1.has(n - 1)){
            let temp = 1 ;
           
            while(set1.has(n + temp)){
                temp +=1 
            }
              res = Math.max(temp,res)
           }
          
        }
        return res






        }
    }
