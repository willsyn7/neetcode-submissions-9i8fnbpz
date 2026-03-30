class Solution {
    /**
     * @param {number[]} nums
     * @return {numer[][]}
     * 1. Declare var called res and sbusuetsts,
     * call dfs on the lef 
     * 2. Dlecla re method called ffs and pass in nums, i subsets and res as aprpmreanters
     * 3. Declare an if conditon atht checeks if i is graeter then nums.egltn h
     * 
     */
    subsets(nums) {
        let res = [];
        let subset = [];
        this.dfs(nums,0,subset,res);
        return res;
    }
    dfs(nums,i,subset,res){
        if(i >= nums.length){
            res.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        this.dfs(nums,i + 1, subset,res);
        subset.pop();
        this.dfs(nums,i + 1, subset,res )
    }
}
