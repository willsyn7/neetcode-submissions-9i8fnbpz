class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  
     const res = {};
        for( let s of strs){
        let temp = s.split('').sort().join('');
        ;
     if(!res[temp]){
        res[temp] = [];
     }
     res[temp].push(s);
        }
    return Object.values(res)


        
    }
}
