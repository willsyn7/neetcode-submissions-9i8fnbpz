class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = {}; 
        for(const ele of strs){
            let count = new Array(26).fill(0);
            for(const s of ele){
                count[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            if(!output[count]) output[count]= [];
            output[count].push(ele)
        }
        return Object.values(output)

    }
}
