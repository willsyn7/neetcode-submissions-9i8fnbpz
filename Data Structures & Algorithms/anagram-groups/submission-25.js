class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 1. Delcare a response object
     * 2. Itterate through teach sreposne array element
     * 3. Have a cacheh vairialbe that will generate an array with the siz eof 26 fille diwith 0 
     * 4. Use a for loop to itterate thorugh each ivnidiale lemetn
     * 5. Add +1 at the idnex of the char code at the array subtracted with with teh 
     * chard oad the vlaue of a 
     * 6. Store the count array as keys and push the rueslts into an emppy arry as values
     * Declare an if codniotin that checeks if the coutn array exists as key , if not create ane mepty 
     * array as value 
     * 7. retunr all values in res object
     * 
     */
    groupAnagrams(strs) {
        const res = {};
        for(let string of strs){
            let count = new Array(26).fill(0);
            for(const s of string){
              
                count[s.charCodeAt(0) - 'a'.charCodeAt(0)] +=1
          
            }
            if(!res[count])res[count] = [];
            res[count].push(string)
        }
           return Object.values(res)
    }
 
}
