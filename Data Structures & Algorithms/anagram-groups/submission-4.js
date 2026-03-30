class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = []
        let obj = {}
      for(let i = 0 ; i < strs.length ; i++){
        sorted.push(strs[i].split('').sort().join(''));
      }
      console.log(sorted)
      for(let i = 0; i< sorted.length;i++){
        if(!obj[sorted[i]]) obj[sorted[i]] = [];
          obj[sorted[i]].push(strs[i])
      }
    return Object.values(obj)
    }
}
