class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0 ; 
        let r = Math.max(...piles);// time
        let res = r
        while(l <= r ){
            let time = 0 ;
            let m = Math.floor((l + r) /2) 
            for(let p of piles){
                time += Math.ceil(p /m)
            }
            if(time <= h){
                res = m
                r = m - 1;
            }else{
                l = m + 1
            }

        }
        return res 

    }
}
