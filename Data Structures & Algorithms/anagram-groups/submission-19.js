class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let ele of strs){
            let temp = new Array(26).fill(0)
            for(const s of ele){
                temp[s.charCodeAt(0) - "a".charCodeAt(0)] +=1;
            }
            if(!res[temp])res[temp] = [];
            res[temp].push(ele)
        }
        return Object.values(res)
    }
}
