class Solution {

    topKFrequent(nums, k) {
        const freqobj = {};
        const freqarray = Array.from({length: nums.length + 1 } , () => [])
        const output = []
     
        for(const n of nums){
            freqobj[n] = (freqobj[n] || 0) + 1;
        }
        for(const key in freqobj){
        freqarray[freqobj[key]].push(parseInt(key))
        }
    for(let i = freqarray.length - 1 ; i > 0; i--){
        for (const ele of freqarray[i]){
         if(output.length ===k)return output;
         output.push(ele)

        }
    }
    return output 
    }
}
