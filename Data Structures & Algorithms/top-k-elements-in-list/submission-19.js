class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({length:nums.length+ 1},()=>[]);
        const output = [];
        for(let n of nums){
            count[n] = (count[n] || 0) + 1; 
        }

        for(let keys in count){
            freq[count[keys]].push(parseInt(keys))
        }

        for(let i = freq.length - 1; i > 0 ; i--){
            for(let ele of freq[i]){
                output.push(ele)
                if(output.length === k){
                    return output
                }

            }
        }
        console.log(freq)

    }
}
