class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0 ;
        let set1 = new Set()
        let res = 0;
        for(let r = 0 ; r < s.length ; r++){
            while(set1.has(s[r])){
                set1.delete(s[l])
                l++;
            }
    
            set1.add(s[r]);
            console.log(set1)
            res = Math.max(res, r - l + 1 )
        }
        return res 
    }
}
