class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 1. Declare an array containg the var left and rigiht, poitner,
     * // asisgni ito the value of 0  and argarray.elgnth -1;
     * 2. Dcelare a while stamtent to move the left and potioenrs 
     * // Set  a codntion where it will keep mvoeign the pointers as longa s left < the right
     * 3. Declare a mid point, take the middleof teh left and right, use >> 1
     * 4. Deeclare a variabile called guess an assigin to the index of  the mid point index
     * Declare antoehr array with leftnumsand right ddeclared nuames and asisign it
     * to the value of the left and right nums array at the left and right indexes
     * 5. Decalre a viralbe called target, and asisign to the toutput of is teh value 
     * at the left most idnex in teh arguemnt array greater the the right most index 
     * 6. Declare an if codntoi htat hceceks if is tarffget is true, if it is return left num
     * // edge case for when the left most poitner is arleady the mininum
     * 7. Declare a cosnt tnanvitaible calle dand asisign to the value of eveualted value 
     * of wether the left mvoest lvaue is greater then the guess, if it is 
     * reaisign the left modier to 1 more the mid piont
     * 8. Do the same thing for hte other isde
     * 9. retur outside of hte for loop
     * 
     * 
     */
    findMin(nums) {
      let [left, right] = [0 , nums.length - 1];
      while(left<right){
        let m  = left + right >> 1;
        let guess = nums[m];
        const [leftvalue,rightvalue] = [nums[left],nums[right]]
        // console.log(m)
        // console.log(guess)
        console.log(leftvalue,rightvalue)
        const target = leftvalue < rightvalue
        if(target)return leftvalue// for edge case 
        const isgreater = leftvalue<= guess;
        if(isgreater) left = m + 1;

        const isless = guess < leftvalue;
        if(isless) right = m
      }
      return nums[left]

    }
}
