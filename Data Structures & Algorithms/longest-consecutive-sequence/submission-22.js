class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let output = 0 ;
        let values = new Set(nums);
        for(let n of nums){
            if(!values.has(n -1)){
                let count = 1 ;
                while(values.has(n + count)){
                    count +=1
                }
            output = Math.max(count,output);
            }
        }
        return output

    }
}
