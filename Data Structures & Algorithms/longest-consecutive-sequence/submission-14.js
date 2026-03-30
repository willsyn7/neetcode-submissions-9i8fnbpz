class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0 ; 
        let set1 = new Set(nums);
        for(const n of nums){
            if(!set1.has((n) - 1)){
                let length = 1 
            
            while(set1.has(n + length)){
                length +=1
            }
              res = Math.max(res,length)
        }

      
        }
        return res 
        
    }
}
