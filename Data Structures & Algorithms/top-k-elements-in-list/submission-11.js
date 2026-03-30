class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * 1. Declare a set and map 
     * 2. Hvae the set store the frequecy as kesy and array elment ss avlues
     * 3. Declare an arrray that 
     */
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
