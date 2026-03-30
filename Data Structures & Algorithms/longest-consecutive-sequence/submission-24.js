class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let values = new Set(nums);
        let res = 0;
        
        for(let int of nums){
        let count = 1;
        while(values.has(int + count)){
                count++;
        }
        res = Math.max(count,res);
        }
        
        return res;
    }
}
