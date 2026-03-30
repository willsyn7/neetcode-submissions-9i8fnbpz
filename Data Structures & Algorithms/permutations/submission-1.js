class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
           let res = [];
    let fix = (idx,nums) =>{
        if(idx === nums.length){
            res.push([...nums]);
            return
        }
        for(let i = idx; i < nums.length ;i++){
      [nums[idx], nums[i]] = [nums[i], nums[idx]];
            fix(idx + 1, nums);
   [nums[idx], nums[i]] = [nums[i], nums[idx]];
        }
    }   
    fix(0, nums)
    return res 
};
}
