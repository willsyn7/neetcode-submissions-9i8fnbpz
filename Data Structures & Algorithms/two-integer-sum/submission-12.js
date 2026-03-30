class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map =  new Map();
        for(let i = 0 ; i < nums.length; i++){

            let dif = target - nums[i];
            let sumindex = map.get(dif);


            
            if(map.has(dif)){
                return [i , sumindex]

            }
            map.set(nums[i],i)
            
        }
        map

    }
}
