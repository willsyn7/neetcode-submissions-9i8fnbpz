class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set(nums);
       if(map.size !== nums.length)return true;
       return false

    }
}
