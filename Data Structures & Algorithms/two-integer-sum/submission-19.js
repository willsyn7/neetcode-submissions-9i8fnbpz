class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 1. Decclare a diff variable and assign it to the dif of nums and traget
     * Declare a new isntance of a hash map ; 
     * 2. Decalre a for loop to inttereat htough the nums array
     * 3. if the loop is
     */
    twoSum(nums, target) {
        let map1 = new Map();
        for(let i = 0 ; i < nums.length; i++ ){
            let dif = target - nums[i]
            if(map1.has(dif))return [map1.get(dif),i];

            map1.set(nums[i],i)

        }
        return []
    
    }
}
