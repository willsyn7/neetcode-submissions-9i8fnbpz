class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        let sorted = []
        for(let s of strs){
           sorted.push(s.split('').sort().join(''));
        }
        // console.log(sorted)
         for(let i = 0 ; i< sorted.length ;i++ ){
        if(!obj[sorted[i]])obj[sorted[i]] = [];
        obj[sorted[i]].push(strs[i])
         }
            return Object.values(obj)
    }
}
