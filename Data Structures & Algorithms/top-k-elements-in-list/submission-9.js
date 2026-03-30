class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        const freq = Array.from({length: nums.length +1},()=>[]);
        console.log(freq);
        for( let n of nums){
            obj[n] = (obj[n] || 0 ) + 1;
        }
         console.log(obj)
        for(const keys in obj){
        freq[obj[keys]].push(keys)
        }
        const output = []
         console.log(freq)
        for(let i = freq.length - 1 ; i > 0  ; i--){
            for(const ele of freq[i]){
               output.push(ele);
                if(output.length === k)return output
                 
                
            }
        }
    }
}
