class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     * Stegyety: use binary searhc to mvove left and right pointers, to figure out 
     * which row the target is on, after findingt hre rwo run binary search agian 
     * to to find out if it is in the 2d mtarix
     * Input : 2d matrix, int value;
     * Output; Booleman Value  T/F
     * 1. Declare ROWS, assign to matrix lneght,
     * Delcare COLS and assign to length of first matrix row
     * 2 . Declare a top variabled and assign to the valeu of 0; 
     * 3. Delcare a bot var and assiign to the value of ROWS - 1
     * 4. Delcare a var called mid, assiing to the value of top + bot /2
     * 5. Declare an if ocdniont aht hcecheks if target > top pointer last index 
     * [top][ROWS],
     * else if target < matrix[bot][0];
     * else{
     * break}
     */
    searchMatrix(matrix, target) {
        let ROWS  = matrix.length;
        let COLS = matrix[0].length
        let top = 0 ; 
        let bot = ROWS -1;
        while(top <= bot){
            
            let mid = Math.floor((top + bot)/ 2)
       
            if(target > matrix[mid][COLS  - 1])top = mid +1;
            else if(target< matrix[mid][0])bot= mid -1;
            else{
                break
        }
            }
        if(!(top <= bot)){
            return false 
        }
        let mid = Math.floor((top + bot)/ 2);
        let l = 0 ; 
        let r = COLS -1

        while(l <= r){
            let m = Math.floor((l + r) / 2);
            if(target > matrix[mid][m])l = m +1;
            else if (target < matrix[mid][m])r = m -1 ;
            else{
                return true
            }
        }
        return false 
    }
}
