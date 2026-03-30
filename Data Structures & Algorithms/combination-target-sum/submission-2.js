class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let temp = [];
        let res = [];
        this.backtrack(nums,target,temp,res, 0 )
        return res ; 
    }
    backtrack(nums,target,temp,res,i    ){
        if(target === 0 ){
            res.push([...temp]);
            return;
        }
        else if( target < 0 || nums.length <= i){
            return            
        }else{
            temp.push(nums[i]);
            this.backtrack(nums,target - nums[i],temp, res, i);
            temp.pop();
            this.backtrack(nums,target,temp, res, i + 1)
        }
        }
    }

