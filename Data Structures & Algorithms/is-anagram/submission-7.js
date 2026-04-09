class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if(s.length !== t.length)return false;
        let sCount = {};
        let tCount = {};

        for(let str of s){
        sCount[str] = (sCount[str] || 0) + 1;
    }
    for(let str of t ){
        tCount[str] = (tCount[str] || 0 ) + 1;
    }

    for(let keys in sCount){
        if(sCount[keys] !== tCount[keys] || !tCount[keys])return false;
    }
return true;
}

}
