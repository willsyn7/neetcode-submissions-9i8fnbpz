class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};
        let array1 = Array.from({length:nums.length +1},() => [] );
        console.log(array1)
        for( const n of nums){
            freq[n] = (freq[n] || 0) + 1;
        }
        console.log(freq);
        for(const n in freq){
            array1[freq[n]].push(parseInt(n))
        }
        let output = [];
        for(let i = array1.length - 1 ; i > 0;i--){
            for(let ele of array1[i]){
                output.push(ele);
                if(output.length === k )return output
            }

        }
    }
}
