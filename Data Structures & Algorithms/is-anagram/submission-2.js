class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 1. Delcare an if condion that would chekc for the edge case
     * if arg s or t are nto the same or msising 
     * 
     * 2. Declare a new arra fcalleda rray 1 and fill it with 26 elmenmentns
     * with tehv alue of 0 
     * 3. Delcar a for loop that owudl ittreat hteoughthe s  stirng raufmgent
     * 4. At the cahr idnex incmrent by the value of 1 , value at index i - value of indexa 
     * 5.Decrement useign charcodeat current index of t and the vlaue of char code at a 
     * 6.Use a for loop tot eitititriea ghouthg hte new array and checke if all values ar eequal to 0 
     * if so return true, else reutrn false 
     */
    isAnagram(s, t) {
        //    const freq = Array.from({ length: nums.length + 1 }, () => []);         
        if(s.length !== t.length)return false ; 
        const count = new Array(26).fill(0);
    for(let i = 0 ; i <s.length; i++){
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i)  - "a".charCodeAt(0)]--;
    }
    return count.every(val => val === 0 );
  

    }
}
