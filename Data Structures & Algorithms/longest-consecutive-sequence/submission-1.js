class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    //Delcar ean ojbect
    //declare an otuput number starting at the value of 0 ; 
    // the index of the start of each sequence will not be cosequeitive
    // let 
   let set1 = new Set(nums);
   let greatest = 0 ; 
   for(let n of set1){
    if(!set1.has(n - 1)){
    let length = 1;
    
    while((set1.has(n + length))){
    length += 1;
   }
   greatest = Math.max(length,greatest);
    }
    }
    return greatest 
    }
   

    
}
