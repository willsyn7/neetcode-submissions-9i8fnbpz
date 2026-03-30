class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const values = new Set(nums);
        let max = 0 ; 
        for(let n of nums){
            if(!values.has(n -1)){
                let l = 1;
                while(values.has(n + l)){
                    l++
                }
                max = Math.max(l,max)
            }
        }
        return max
    }
}
