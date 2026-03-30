class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * //intput : an arry fo itnitngers
     * // output an arrya of intergers, with decidindeing fcreuqrncise 
     * 1. Declare output array 
     * 2. Declare a vairvalcaled frequrency ,and fill it with empty nested arrays 
     * as mcuh as the lgnet of nums
     * 3.let obj = {};
     * 4. ittreat ethorugh the nums array
     * 5. Set key of bojcet as array elmeent and set fureqnecy as its value 
     * add `1 starting 0 to the  value
     * 6. push the the keys into the declared fureqncy array at those idnedesx
     *7 Ittreat rhoguht eh nested array useing a for loop,
     8. keepign pushing to the outptu array till the lngeth k is reached
     9 reutrn theotuptu arya 
     8. push the 
     * 7. 
     */
    topKFrequent(nums, k) {
       let output = [];
       let freqobj = {};
       let freq = Array.from({length :nums.length + 1},()=>[]);
       for(const ele of nums){
        freqobj[ele] = (freqobj[ele] || 0 ) + 1 ;
       }
      for(const keys in freqobj){
        freq[freqobj[keys]].push(parseInt(keys))
      }
      console.log(freq)
      for(let i = freq.length - 1 ; i > 0; i--){
        for(let n of freq[i]){
            output.push(n) 
            if(output.length === k)return output;
            
        }
      }
    //    console.log(freqobj)
    }
}
