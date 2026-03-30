class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set1 =  new Set(nums);
        if(nums.length !== set1.size)return true;
        return false


    }
}
