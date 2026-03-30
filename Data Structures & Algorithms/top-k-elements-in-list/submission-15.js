class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];
        const freq = {};
        const array = Array.from({length : nums.length + 1 }, () => []);

        for(const n of nums){
             freq[n] = (freq[n] || 0) + 1 ;
        }
        console.log(freq)
        for(const key in freq){
            array[freq[key]].push(parseInt(key))
        }
        for(let i = array.length - 1 ; i > 0 ; i--){
            for (const ele of array[i]){
                res.push(ele)
                if(res.length === k)return res; 
            }
        }
    }
}
