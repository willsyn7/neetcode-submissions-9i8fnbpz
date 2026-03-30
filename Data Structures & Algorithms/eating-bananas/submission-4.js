class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     * Input : An array of interers called piles and interger h 
     * output : Integer
     * 1 Declare a left poitner and iantizile to 0 
     * 2. intailzie a irght piotner and assign to the lenght of the max in the plies array
     * 3. Delcare a res valaue  and assign to the value of r incase and assign it toeh soethign else
     * 4. Declare a while that will run as loong as l< r
     * 5. Declare a k element and asisign to the value of  l + r /2
     * 6. if piles k is grater then 
     *     */
    minEatingSpeed(piles, h) {
        let l = 1 ; 
        let r = Math.max(...piles)
        let res = r;
        while( l <=r ){
            let totaltime = 0;
         let k =  Math.ceil((l + r)/2)
         for(const p of piles){
            totaltime += Math.ceil( p / k )
         }
         if(totaltime <= h){
            res = k;
             r = k -1
         }else{
            l = k +1; 
         }

        }
        return res 


    }
}
