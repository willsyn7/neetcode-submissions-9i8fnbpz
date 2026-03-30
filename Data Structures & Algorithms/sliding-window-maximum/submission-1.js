class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
    for(let i = 0; i <= nums.length- k ; i++){
        let max = nums[i];
        for(let y = i ; y < i + k;y++){
            max = Math.max(max,nums[y])
        }
        res.push(max)
    }
    return res
    }
}
