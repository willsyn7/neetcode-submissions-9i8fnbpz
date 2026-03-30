class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     * 1. Declare a let called l and asisign it to the value of 0 
     * 2. Declare a right potiner and aisising it othe vlaue of nubmers.legnth --1
     * 3.Delcare a while stmganttent that will l < r ; 
     * 4. Declare a sum varible which will be assigned to the value of 
     * of the left and rihgt piotners in the nusma rray 
     * 5.if sum is greater then target , decrmeent right poitnr
     * 6. if sum is less then the arget, cinrement left potner
     * 7. else break
     * 8. Reutnr the index vlaue outisde of while loop 
     */
    twoSum(numbers, target) {
        let l = 0 ; 
        let r = numbers.length - 1; 
        while(l <= r ){
            let sum = numbers[l]  + numbers[r];
        if(sum > target) r-=1;
        else if(sum<target) l += 1;
        else{
            break
        }

        }
        return [l + 1,r + 1]

    }
}
