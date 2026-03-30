class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    //stratgey add length and # before each array eelememnt and push into otuptu array while 
    //ittreating though it

// 1. Declare empty otuptuvriabile
//2. ittreate through the input arg array 
// 3. Use add length useing the js keywrod length followed by a pound key and the array elmeent

    encode(strs) {
        let output = ''
        for(const s of strs){
          output +=`${s.length}#${s}`
        }
        console.log(output)
            return output

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
//Srtagey Use a while loop to ittreate thoguht the string and check for the lenght and # 
//key if it s found move poointesr and move onto next string tilll the entire length is reached

/**
 * 1.Declare an ouptut vraibalbe called otuput and assign it to an empty array
 * Declare a poitner x and set it equal to  
 * 2. Ddelcare a while loop, that will execute code till it i === arg length
 * 3.Declare our second poiitner j and it will be euqal to x
 * 4.Delcalre a while loop that will check if the the arg str at index j will be equal to # 
 * incmrent hte value of j 
 * 5.Use Keyrod parseInt to get the intger valeu from the stirng lock
 * 6. Use js built in fucntion .su  bstring and pass in the two poitners to return the stirng bewteen 
 * elements x and j  
 * 7.Push the substring 
 */
    decode(str) {
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
}
