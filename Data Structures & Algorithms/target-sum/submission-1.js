class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
    let res = 0 ;

        const backTrack =  (curr, i ) => {
            if(i === nums.length){
                return curr  === target ? 1 : 0
            }
            

        return (
           backTrack(curr - nums[i], i + 1) +
            backTrack(curr + nums[i], i +1)
        )
        }

    return backTrack(0,0)
    }

}
