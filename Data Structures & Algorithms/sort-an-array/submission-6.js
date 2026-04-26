class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let min = Math.min(...nums);
        let max = Math.max(...nums);

        let bucket  = Array.from({length :  max - min  + 1},() => 0);
        const res = [];
        for(let i = 0 ; i < nums.length;i++){
            bucket[nums[i] - min]++;
        }
    console.log(bucket)
        for(let i = 0 ; i < bucket.length;i++){
            let y = 0 ;
            while(y !== bucket[i]){
                res.push(i + min);
                y++;
            }
        }
        return res;


    }
}
