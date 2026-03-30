class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let str of strs){
        res += str.length + "#" + str
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const res = [];
    let l = 0 ; 
    while(l < str.length){
        let r = l ; 
        while(str[r] !== "#"){
            r++;
        }
        let length =  parseInt(str.substring(l,r));
        console.log(length);
        l = r + 1;
        r = l + length;
        res.push(str.substring(l, r));
        l = r;
    }   
    return res;
    }
}
