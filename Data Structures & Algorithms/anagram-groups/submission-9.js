class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = []
        for( const s of strs){
        sorted.push(s.split('').sort().join(''));
        }
        let obj = {};
        console.log(sorted);
        for(let i = 0 ; i < strs.length ; i++){

        if(!obj[sorted[i]]){
            obj[sorted[i]] = [];
        }
        obj[sorted[i]].push(strs[i])
        }
        return Object.values(obj)
        }
    }