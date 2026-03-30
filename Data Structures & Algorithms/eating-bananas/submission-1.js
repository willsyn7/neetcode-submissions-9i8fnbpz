class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     * 
     */
    minEatingSpeed(piles, h) {
        let l = 1 ;
        let r = Math.max(...piles);
        let output = r ;

        while(l <= r){
        let m = Math.floor( (l + r) / 2);
        let time = 0 ;
        for(let p of piles){
            time += Math.ceil(p / m);
        }
        if(time<=h){
            output = m ;
            r = m - 1 ;

        }else{
            l = m + 1;
        }
        


        }
        return output

    }
}
