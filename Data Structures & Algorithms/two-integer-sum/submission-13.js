class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     *1. Declare a cosnt variabled called diifrience anda ssign it to the valuted
     result of traget subtracted from nums
     2. Declare a costnant vraialbe called mpa1 and  assing to a new 
    a new map isntance
    3. Use a for loop to titreate through the arg array
     3.Delcare a new sum index var called sumidnex and assign
     it to the relavuted value of useing get on thew nestianc eof map 1
     with diffirence as its apraprmter
     
     4.useing th keyerod has, if map has the dfifirience value, reutrn index useing get
     5. use map.set ot create key value pairs, index, value
     6. reutrn [1,-1w]
     */
    twoSum(nums, target) {
        const map1 = new Map();
    for(let i = 0 ; i < nums.length; i++){
        let dif = target - nums[i];
        console.log(dif,`dif`)
        let sumindex = map1.get(dif);
        console.log(sumindex)
    if(map1.has(dif)) return [i, sumindex];
    map1.set(nums[i],i)

    }

        return [1,-1]


    }
}
