class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let dp = new Map();
        dp.set(0,1);

        for(let num of nums){
            let newDp = new Map();

            for(let [total , count]of dp){
                newDp.set(total + num , (newDp.get(total + num) || 0) + count)
                newDp.set(total - num, (newDp .get(total - num) || 0) + count)
            }
            dp = newDp;
        }
        return dp.get(target)|| 0 
    }
}
