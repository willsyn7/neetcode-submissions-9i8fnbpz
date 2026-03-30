class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0 ; 
        let l = 0 ; 
        let stringset = new Set() ;
        let res = 0 ;

        for(let r = 0; r< s.length ; r++){
            while(stringset.has(s[r])){
                stringset.delete(s[l]);
                l+=1
            }
            stringset.add(s[r])
            res = Math.max(res,r - l + 1 )
        }
        return res 
    }
}
