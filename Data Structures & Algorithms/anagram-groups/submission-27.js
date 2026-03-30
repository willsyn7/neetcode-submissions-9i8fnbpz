class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let n = strs.length;
        let anagrams = {};
    for(let str of strs){
        let values = new Array(26).fill(0);
        console.log(values)
        for(let s of str){
            values[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        if(!anagrams[values]){
            anagrams[values] = [];
        }
        anagrams[values].push(str);
    }
        return Object.values(anagrams)

    }
}
