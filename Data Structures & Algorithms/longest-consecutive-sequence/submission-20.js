class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set1 = new Set(nums);
        let output = 0 ;
       for(let n of set1){
        if(!set1.has(n - 1)){
            let l = 1;
            while(set1.has(n + l)){
                l+=1;
            }
            output = Math.max(l,output)
        }
       }
       return output 
    }
}
