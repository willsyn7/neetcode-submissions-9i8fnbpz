class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = '';
        for(const s of strs){
            output += `${s.length}#${s}`
        }
        console.log(output)
        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {//declare an output array
    let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j), 10);
            i = j + 1;
            j = i + length;
            result.push(str.substring(i, j));
            i = j;
        }
        return result;
    }
  
    //delcare an 
        //declare a while loop that checks if pointer x is equal str.length 
        
        //declare a while condition that checks if pointer y is euqal to the string #
     //declare na otuput array 
     // delcare 2 poointers 

    


    
}
