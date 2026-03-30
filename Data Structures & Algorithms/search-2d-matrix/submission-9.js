class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //poitners to each iidnvidualwith the nested arrays
        let COL = matrix[0].length -1 ; // needst to be the max number of the
        // of each coloum to move aorund within the neste darray
        let ROWS = matrix.length - 1; 
        //has to be the max nubmer of elments in the arra
        // because were moveing the poitner from each ensted array to athe other
        //potiners for each row 
        let top = 0 ;
        let bottom = ROWS;
        while(top <= bottom){
            let mid = Math.floor(( bottom + top  ) / 2);
        if(matrix[mid][0]>target)bottom = mid - 1 ; 
        else if(matrix[mid][COL] <target ) top = mid  + 1;
        else{
            break
        }
        }
        if(!(top<=bottom)){
            return false 
        }
        let l = 0;
        let r = COL;
           let mid = Math.floor(( bottom + top  ) / 2);
        while(l <= r ){
            let m = Math.floor(( l + r  ) / 2);
        if(target > matrix[mid][m])l = m + 1;
        else if ( target < matrix[mid][m])r = m - 1;
        else{
            return true
        }
        }
    

return false 

    }
}
