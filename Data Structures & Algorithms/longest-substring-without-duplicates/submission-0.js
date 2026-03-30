class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let set1 = new Set();
    let l = 0 ;
    let output = 0 ;

    for(let i = 0 ; i < s.length  ; i++){
        while(set1.has(s[i])){
            set1.delete(s[l]);
            l++;
        }
        set1.add(s[i]);
        output = Math.max(output,i - l + 1 )
    }

return output 


    }
}
