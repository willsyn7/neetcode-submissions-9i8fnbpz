class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length !== t.length)return false;
     let ss = s.split('').sort().join('')
     console.log(ss)
     let ts = t.split('').sort().join('')
     for(let i = 0 ; i < ss.length ; i++){
        if(ss[i]!== ts[i])return false;
        console.log([i])
     }
return true 
    }
}
