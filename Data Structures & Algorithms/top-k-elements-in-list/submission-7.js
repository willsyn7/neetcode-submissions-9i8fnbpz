class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * Intput int array, int
     * Otuput : an array of inteigers
     * Stragtey : Use a hash set to popualt an object conatianging the frequeinces
     * as values assgined to each occurance o fe elmeent
     * Decalre anotehr object called freqarray, divided into teste darrays, 
     * Work pacekages till we reach our k element in the efreq array
     * 1. Decalre an obojectted caleld freqboj  and assigin to an empty object
     * 2. Delcclar ea freq array and populate with nested arrays useing, fill alnd form
     * 3. use a for loop to tittreat ethorugh the arg arrya
     * 4. assign each element as key, incrment the current value or have the current be 0 and add by 
     * 5.push the keys into the freqarray at freqobj values
     * 6. Declare an otuptu array caled outptu
     * 7. Use a for loop to ittreaat ethourgh freq array from the end 
     * 8. use another for loop to ittreate through the ntested array
     * 9. Check if the outptu length is equal to the trarget k 
     * 10. Reutrn array
     */
    topKFrequent(nums, k) {
        const freqobj = {};
        const output = [];
        const freqarray = Array.from({length : nums.length + 1},() =>[]);
        for(let n of nums){
            freqobj[n] = (freqobj[n]|| 0) + 1 ;
        };
        for(const key in freqobj){
        freqarray[freqobj[key]].push(parseInt(key));
        }
console.log(freqarray)
        for(let i = freqarray.length-1 ;i > 0 ;i-- ){
               console.log(i)
            for(let ele  of freqarray[i]){
                  output.push(ele)
            if(output.length === k )return output ;
            console.log(ele)
              
            }

        }

    
    }
}
