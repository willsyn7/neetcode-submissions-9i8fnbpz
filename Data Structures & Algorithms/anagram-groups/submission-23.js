class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * Stratgey : Count the char code for each word and store the elements of the same 
     * count in a hash map 
     * 1.Declare a res var and assing to an empy araray 
     * 2. Declare a for loop to itterate thorugh the array 
     * 3. Decalre an empty cache and assign to an array fille diwht 0s x 26 
     * 4. Declare a for loop to each indvidual cahrhachhter
     * 5. Incmrent 1 at the current index subtracted form the charhchte value at charht 0 
     * 6. Declar ean fiicdonoitn that checkes if the curren array eixisits as a key
     * 7. if it dosen't create a new arrya 
     * 8 push the elelemetn intho taht array 
     * 8 Use object.values to return all values outside of
     * 
     */
    groupAnagrams(strs) {
        const res = {};
        
        for(const ele of strs){
            let cache = new Array(26).fill(0)
            for(let i = 0; i < ele.length ; i++){
                cache[ele[i].charCodeAt(0) - "a".charCodeAt(0)] +=1; 
            }
            if(!res[cache])res[cache] = [];
             res[cache].push(ele)
        }
        return Object.values(res)
          
    }
}
