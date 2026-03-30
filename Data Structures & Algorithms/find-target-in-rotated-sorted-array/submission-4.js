class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
      let l = 0, r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) return m;

        if (nums[m] > nums[r]) {              // mid on LEFT bump
            if (nums[l] <= target && target < nums[m]) {
                r = m - 1;                    // go left
            } else {
                l = m + 1;                    // go right
            }
        } else {                              // mid on RIGHT bump
            if (nums[m] < target && target <= nums[r]) {
                l = m + 1;                    // go right
            } else {
                r = m - 1;                    // go left
            }
        }
    }

    return -1;
}

}