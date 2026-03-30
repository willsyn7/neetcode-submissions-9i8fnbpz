class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * [2,3,1,1,4]
     * goal = 4;
     * i = 3 ; 
     * 
     */
 canJump(nums) {
        let goal = nums.length - 1;

        for (let i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= goal) {
                goal = i;
            }
        }

        return goal === 0;
    }
}