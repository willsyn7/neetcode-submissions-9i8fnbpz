class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 1. Delcare a new istnance of set and pass nums arg as aprmatners
     * 2. Declare an optuptu varaibailc and assign to the vlaue of 0 
     * 3. Declare an if coidnitn that chkcekks if output is intiized to 0 
     * 4. if so intiaiize to 1 and run a while loop 
     * 5. while the loop is runining 
     */
    longestConsecutive(nums) {
        const set1 = new Set(nums);

        let output = 0 ; 
    for( let n of set1){
        if(!set1.has(n -1)){
            let curr = 1;
        while(set1.has(n + curr)){
            curr+=1

        }
          output = Math.max(output,curr)
        }
    }
      return output

    }
}
