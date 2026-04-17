class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0 ; 
        let r = nums.length - 1;
        let res = nums[0]
        while(l <= r ){
            let m = Math.floor((r + l ) /2);
            if(nums[l] <= nums[r]){
                res = Math.min(res,nums[l]);
                return res;
            }

            res = Math.min(res,nums[m]);
            if(nums[m] > nums[r]){
                l = m + 1;
            }else{
                r = m - 1;
            }

        }
        return nums[l];
    }
}
