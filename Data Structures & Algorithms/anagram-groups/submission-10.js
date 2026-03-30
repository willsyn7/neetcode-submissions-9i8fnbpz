class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * Inntput array for sgirngs , output : inetger 
     * 1. Declare a no object called res  and assign it to an empy object
     * 2. Declare a for loop to ittreat ehouthorugh the str arrgumetn array
     * 3. Declare an array count and fill it iwht - 
     * 
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
