class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0 ;
        let set1 = new Set(nums);
        for(let i = 0; i < nums.length ; i++){
        if(!set1.has(nums[i] -1)){
            let temp = 1;
            while(set1.has(nums[i] + temp)){
                temp+=1
            }
            res = Math.max(temp,res)
        }
        }
        return res
    }
}
