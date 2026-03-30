class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length )return false;
        let array1 = new Array(26).fill(0);
        
        for(let i = 0 ; i <s.length;i++){
            array1[s.charCodeAt(i) - `a`.charCodeAt(0)]++;
            array1[t.charCodeAt(i) - 'a'.charCodeAt(0)]-=1;
        }
        console.log(array1)
        return array1.every(val => val ===0);
    }

}
