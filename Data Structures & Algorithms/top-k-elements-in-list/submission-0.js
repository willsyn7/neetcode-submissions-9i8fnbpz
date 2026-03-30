class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    ///delcare a new empty objct
    //declare a const freq variabiel and generate an array of arrays starting that
    //will be the length of the arguemnt array
    //populat the declared boject with the count of each array elmeent 
    //decalre a for in loop to ittreate htough nums arg array
    //create a key that will be the elment and the value will be the fruequqency 

    //delcare a for in loop to ittereat ehtough count
    // push the keys in the count object, after converitng them into intergeres
    //declare an empty reposne object 
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
