class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //Declar ea nenw vra called set and asisgn to new set innstnac  and pas sin the numss arrya
        //Declare an ficidon that cehceks the length of the numsm array 
        //and checek hte legnth of the new set is equal 
        // if con is met reutnr ture
        // else return false
        const set1 = new Set(nums);
        console.log(set1)
         if(set1.size === nums.length)return false;
         return true
    }
}
