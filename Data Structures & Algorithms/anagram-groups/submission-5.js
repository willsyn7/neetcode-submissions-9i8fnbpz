class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}
        for(let s of strs ){
        const  sorted = s.split('').sort().join('')
        console.log(sorted)
        //Sorted : non sorted
        if(!res[sorted]){
            res[sorted] = []
        }
        res[sorted].push(s)
        
        }
        return Object.values(res)
    }
}
