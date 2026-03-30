class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];
        nums.sort((a,b)=> a -b)
        for(let i = 0 ;i < nums.length;i++){
            let l = i +1;
            let r = nums.length - 1;
            if(nums[i] > 0)break;
            if(i > 0 && nums[i] === nums[i -1])continue;
   
            while(l < r){
            let sum = nums[l] + nums[r] + nums[i];
            if(sum > 0)r -=1;
            else if (sum < 0) l +=1;
            else{
                output.push([nums[i],nums[l],nums[r]]);
                l++;
                r--;
                while(l < r && nums[l] === nums[l -1]){
                    l+=1;
                }
            }
            } 


        }
        return output
    }
}
