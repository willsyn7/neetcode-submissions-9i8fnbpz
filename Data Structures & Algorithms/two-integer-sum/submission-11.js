class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //stragrey: ittertate htorugh and store diffreince in a hash map
        // after st
        const map = new Map();
        for(let i = 0 ; i < nums.length; i++){
            let dif = target - nums[i];
         
            let index = map.get(dif); // returns the index

            const targets = map.has(dif);
            console.log(targets)
              
            if(targets){
                return [i, index];
            }
            map.set(nums[i],i )

        }
        
    return [1,-1]
   

    }
}
