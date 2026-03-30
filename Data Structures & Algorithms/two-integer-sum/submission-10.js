class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 1. Declare an object called dif
     * 2. Declare a for looop to ittreate thorfu the nusm arrgumente tarray
     * 3. Popule the object with 
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0 ; i <nums.length;i++){
            let dif = target - nums[i]
      if(map.has(dif)){
        return [map.get(dif),i]
      }
      map.set(nums[i],i)
    }
    return [-1,-1];
    }
}

