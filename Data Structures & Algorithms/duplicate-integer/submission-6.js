class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * 1. Declare a new set called sset and asisign it to a new isntnace of the arg array
     * as a parerment
     * 2. Compare the length of the new set with the arg arrya
     * 3 If true retun flase
     * 4. Else reutrn ture
     * 
     */
    hasDuplicate(nums) {
        const set1 = new Set(nums);
        if(set1.size === nums.length)return false;
        console.log(set1.size,nums.length)
        return true
        
    }
}
