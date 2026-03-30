class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res ={};
        for(const ele of strs ){
            let count = new Array(26).fill(0);
            for(let s of ele){
            count[s.charCodeAt(0)- 'a'.charCodeAt(0)] += 1;
            }
            if(!res[count]) res[count] = [];
            res[count].push(ele)
        } 
        return Object.values(res)
    }
}
