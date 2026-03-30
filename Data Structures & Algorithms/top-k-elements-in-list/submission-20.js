class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const output = [];
        const count = {} ;
        const freq = Array.from({length: nums.length + 1}, () => []);

        for(let n of nums){
            count[n] = (count[n] || 0) + 1
        }
        for(let keys in count){
            freq[count[keys]].push(parseInt(keys));
            // freq[count[keys]].push(parseInt(keys));
        }

        console.log(count)
        console.log(freq)

        for(let i = nums.length; i > 0 ; i--){
            for(let x = 0; x < freq[i].length; x++){
                output.push(freq[i][x]);
                if(output.length === k)return output;
            }
        }
    }
}
