class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0 ;
        let r = nums.length -1;
        while(l <= r){
            let m = Math.floor((r + l)/ 2);

            if(nums[m] === target)return m ; 
            else if (nums[m] < nums[r]){ // riht side sorted
           if(nums[m] < target && target <= nums[r]){
            // 0 < 1  && 1 <= 2
                l = m +1;
            }else{
                r = m -1;
            }
            }else{ // left sid eis roted
            // t= 4 
            // 4< 5 && 3 < 4 
                if(target < nums[m] && nums[l] <= target){
                    r = m-1;
                }else{
                    l = m + 1
                }
            }
        }
        return -1;
    }
}
