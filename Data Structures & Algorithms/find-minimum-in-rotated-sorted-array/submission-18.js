class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0; 
        let r = nums.length - 1;

        // Note: l < r instead of l <= r
        while (l < r) {
            let m = Math.floor((r + l) / 2);

            if (nums[m] > nums[r]) {
                // The minimum MUST be to the right of m
                l = m + 1;
            } else {
                // The minimum could be m itself, or to the left.
                // We do NOT do m - 1, because we might skip the minimum.
                r = m;
            }
        }
        
        // When the loop terminates (l == r), the pointer is sitting directly on the minimum.
        return nums[l];
    }
}