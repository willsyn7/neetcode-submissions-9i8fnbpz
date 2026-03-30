class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        let bucket = Array.from({length : n + 1}, () => [] );
        let elements = {};

        for(let int of nums){
            elements[int] = (elements[int] || 0 ) + 1;
        }

        for(let keys in elements){
            bucket[elements[keys]].push(parseInt(keys));
        }

        const res = [];

        for(let i = n; i > 0 ; i--){
            for(let x = 0 ; x < bucket[i].length ; x++){
                  res.push(bucket[i][x])
                if(res.length === k)return res;
              
            }
        }
        return -1;
    }
}
