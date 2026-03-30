class Solution {
    /**
     * @param {number[]} nums
     * @return {number}'
     * 1. Delcar ean output variable and aissign it tohe vlaue of 0 
     * 2. Declare a new set an dasisign it to anew isntanc e
     * of nums
     * 3.
     *     */
    longestConsecutive(nums) {
        let output = 0; 
        let set1 = new Set(nums);
        for(let n of set1){
            if(!set1.has(n-1)){
                let length = 1;
                while(set1.has(n + length)){
                    length +=1
                }
                output = Math.max(length,output);
            }

        }
        return output

    }
}
