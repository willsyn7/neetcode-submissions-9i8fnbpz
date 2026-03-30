class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];
        let temp = [];
        this.dfs(nums,res,temp,0);
        return res
    }
    dfs(nums,res,temp,i){
        if(i >= nums.length){
            res.push([...temp])
            return 
        }
        temp.push(nums[i]);
        this.dfs(nums,res,temp, i + 1);
        temp.pop();
        this.dfs(nums,res,temp,i + 1)

    }

}
