class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set1 = new Map();

        for(let i = 0 ; i < nums.length ; i++){
            let diff = target - nums[i] 
            console.log(diff)
            
            if(set1.has(diff)) return [set1.get(diff),i];
            
            set1.set(nums[i], i );
        }
        console.log(set1)
        return [];
    }
}
