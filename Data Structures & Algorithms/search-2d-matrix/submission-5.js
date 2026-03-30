class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
     let ROWS  = matrix.length -1 ;
     let COL = matrix[0].length - 1 ;
     let top = 0 ; 
     let bot = ROWS;
     while(top <= bot ){
        let m =  Math.floor((top +  bot )  /2) ;
        if(target> matrix[m][COL])top  = m + 1;
        else if (target<matrix[m][0]) bot = m - 1;
        else{
            console.log(m)
            console.log(matrix[m][COL])
            console.log(matrix[m][0])
        
            break
            
        }
     }
         if (!(top <= bot)) {
            return false;
        }
         const  m =  Math.floor((top +  bot )  /2) ;
        let l = 0 ;
        let r = COL;
        while(l <= r){
            let mid = Math.floor((l + r) / 2);
        if(target > matrix[m][mid]) l = mid + 1;
        else if (target< matrix[m][mid]) r = mid - 1;
        else{
            return true
        }

        
        
     }
     return false 
    }
}
