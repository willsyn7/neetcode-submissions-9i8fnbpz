class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map1 = new Map();
        for(let i = 0; i < nums.length; i++){
            let dif = target - nums[i];
        
            let sumindex = map1.get(dif);
    
            
            if(map1.has(dif))return [sumindex,i];


            console.log
            map1.set(nums[i],i)

        }
        return []
    }
}
