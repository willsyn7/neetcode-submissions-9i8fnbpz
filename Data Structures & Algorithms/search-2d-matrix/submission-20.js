class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length, COLS = matrix[0].length;
        let l = 0 ;
        let r = ROWS -1 ;
        let row; 

        while(l <= r){
            let m = Math.floor((r + l) / 2);
            if(matrix[m][0] <= target && matrix[m][COLS -1] >= target ){
                row = m ;
                break;
            }else if(matrix[m][0] > target){
                r = m -1; 
            }else if(matrix[m][COLS -1] < target ){
                l = m +1;
            }
        } 
        if( l > r)return false;

        console.log(`test1`)
        let lCols = 0; 
        let rCols = COLS -1;

        while(lCols <= rCols){
            let m = Math.floor(( lCols + rCols )/ 2)
            if(matrix[row][m] === target)return true;
            else if(matrix[row][m] < target ){
                 lCols = m +1;
            }else if(matrix[row][m] > target){
                rCols = m -1;
            }
        }

        return false;

    }
}
