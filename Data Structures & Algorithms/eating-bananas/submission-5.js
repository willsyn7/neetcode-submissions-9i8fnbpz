class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     * : Innptu : piles array of integers, h = ineger;
     * . Output :  Slowest rate  : Int ; 
     * 1. Declare a left poitner nad iantiaizle to the value of 0 
     * 2. Declare a right pipnter and asisign to the max vlaue of the pilies  arg arrya
     * 3. Declare a response object called res and asiisgn to the value of the righ tpoitner
     * 4. Delcare a while loop that will run while L<= r
     * 5. Delcae a poitner k and asiisgn to hte vlaue of the roudne dup value 
     * of l + r/2
     * Decalre a var called ottla titme and iatnizile to hte value of 0 
     * 6. Use a for loop to titreat ehtough the arg array 
     * 7. add the value of value at that index / k 
     * 8. Declare an foinco that checeks if the total time is equal to or less then the lvau e
     * of h
     * if so asisgn the value of res to the new value 
     * Subtract the time by subritiraincg r by k -1 ;
     * 9. else add l + 1 ; 
     * reutn rees 
     */
    minEatingSpeed(piles, h) {
        let l = 1 ; 
        let r = Math.max(...piles);
        let res = r ;
        while(l <= r ){
            let k = Math.floor((l + r) / 2)
            let time = 0 ;
            for(const p of piles){
                 time += Math.ceil(p / k);
            }
            if(time <= h){
                res = k ; 
                r = k - 1 ;        
            }else{
                l = k + 1
            }

        }
        return res 

    


    }
}
