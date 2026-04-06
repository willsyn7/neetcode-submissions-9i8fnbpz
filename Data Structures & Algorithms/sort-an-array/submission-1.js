class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let n = nums.length -1;
        let res = []
        let max = Math.max(...nums);
        let min = Math.min(...nums)

            let bucket = Array.from({length: max - min + 1}, () => []);
  
            for(let i = 0 ;i < nums.length;i++){
                bucket[nums[i]- min].push(nums[i]);
            }

            for(let i = 0 ; i < bucket.length;i++){
                if(bucket[i].length){
                    res.push(bucket[i])
                }
            }
            return res
    }

}
