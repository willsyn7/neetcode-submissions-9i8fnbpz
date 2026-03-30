class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     * paramtnerns : nums, target, ans, cur, 0 ;
     * 
     */
    combinationSum(nums, target) {
        let temp = [];
        let res = [];
        this.backtrack(nums, target, res, temp, 0);
        return res; 
    }
    
    backtrack(nums,target, res, temp,i){
        if(target === 0 ){
            res.push([...temp]);
            return
        }else if(target < 0 || i  >= nums.length){
            return; 
        }else{
            temp.push(nums[i]);
            this.backtrack(nums, target - nums[i], res, temp , i);
            temp.pop();
            this.backtrack(nums,target, res, temp , i +1 );
        }
    }
}
