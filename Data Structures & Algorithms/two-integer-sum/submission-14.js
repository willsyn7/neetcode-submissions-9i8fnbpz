class Solution {
    twoSum(nums, target) {
        const obj1 = new Map();
        for(let i = 0 ; i < nums.length; i++){

            let dif = target - nums[i] ;

            let sumindex = obj1.get(dif);
            console.log(sumindex)

            if(obj1.has(dif))return [i,sumindex];
            obj1.set(nums[i],i)

        }

    }
}
