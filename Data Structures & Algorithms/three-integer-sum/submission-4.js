class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * 1 Sort numsa rra y
     * 2. Declar ea re s array 
     * 3. Use a for loop to itterawte through the arg array 
     * 4. 
     * 
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b );
        let res = [];
        for(let i = 0; i < nums.length ; i++){
                if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i +1 ; 
            let r = nums.length - 1; 
         
            while(l < r){
                   let sum = nums[i] + nums[l] + nums[r];
            if(sum > 0) r-=1;
            else if(sum < 0) l +=1;
            else{
                res.push([nums[l], nums[r], nums[i]]);
                l+=1; 
                r-=1;
                while(l <r && nums[l] === nums[l -1]){
                    l+=1
                }

            }

            }

        }
        return res
    
    }
}
