class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
    let res = "";
    for(let s of strs){
        res += (String(s.length) + "#" + s);
    }        
    console.log(res);
    return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        let i = 0;
        while(i < str.length){
            let j = str.indexOf("#", i);

            let len = Number(str.substring(i,j));
            console.log(len)

            let substring = str.substring(j + 1,j + 1 + len);
            res.push(substring);
            i = j + 1 + len;
        }
    return res;
    }
}
