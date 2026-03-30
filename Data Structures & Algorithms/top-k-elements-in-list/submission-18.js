class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqobj = {};
        let array = Array.from({length : nums.length + 1}, () => []);
        let output = [];
        
        for(let n of nums){
            freqobj[n] = (freqobj[n] || 0 ) + 1;

        }
        for(const n in  freqobj){
             array[freqobj[n]].push(parseInt(n));
        }
        console.log(array)

        for(let i = array.length -1 ; i > 0 ; i--){
           console.log(i)
            for(let ele of array[i]){
                console.log(`adsf`)
                output.push(ele);
                if(output.length === k )return output;
            }
        }
    }
}
