class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
    if(s === "")return true;
    
    for(let l = 0 ; l < t.length; l++){
        let sp = 0;
        let tp = l ;

        if(t[tp] === s[sp]){
            
            while(tp < t.length){
                   console.log(t[tp],s[sp])
                if(s[sp] === t[tp])sp++;
                tp++;
            }
            if(sp >= s.length)return true;
        }
    }

    return false;

    }
}
