class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqobj = {};
        let freqArray = Array.from({length: nums.length + 1}, ()=>[])
        for(const n of nums){
         freqobj[n] = (freqobj[n] || 0) + 1 ; 
        }
        for ( const key in freqobj){
            freqArray[freqobj[key]].push(parseInt(key))
        }
        console.log(freqArray)
        const output = [];
        for(let i = freqArray.length - 1  ; i > 0  ; i--){
            for(const ele of freqArray[i]){
                if(output.length === k)return output;
                output.push(ele)
            }
        }
        return output

    
    }
}
