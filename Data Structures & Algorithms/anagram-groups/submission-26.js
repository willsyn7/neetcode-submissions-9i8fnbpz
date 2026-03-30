class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const count = {};
        for(const ele of strs){
            let arr = Array(26).fill(0);
        for(const s of ele){
            arr[s.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;
        }
        if(!count[arr])count[arr] = [];
        count[arr].push(ele) 
        }
        return Object.values(count)


    }
}
