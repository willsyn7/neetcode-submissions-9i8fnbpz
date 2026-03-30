class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 1.Declare a res var and asisign to an mepy boject
     * 2. Declare for loop to ittereate through the strs ar arrya
     * 3. Delcare a var called coutn and itnaiizle with a size of 26 ,
     * for every aphtoepemnt
     * 4. Declare another for looop to itterate thorugh the each element by eltter
     * 5.Add 1 at the index of the curr char subtracted from the char value at a 
     * 6. Outisde of the for loop Delcare an if conditon that checeks if the key eixists
     * if it does not create an empty array 
     * 7 Push the itterated strs elment into the value
     * Return ALl values from the repsosne object
     */
    groupAnagrams(strs) {
        const res = {};
        for(const ele of strs ){
            let count = new Array(26).fill(0);
        for(let s of ele){
            count[s.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;
        }
        if(!res[count]){
            res[count] = []
        }
        res[count].push(ele)
        }
        return Object.values(res)
    }
}
