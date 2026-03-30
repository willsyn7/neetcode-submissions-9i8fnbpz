class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROW = matrix.length;
        let COL = matrix[0].length -1 ;

        let top = 0 ;
        let bot = ROW - 1;

        while(top<=bot){
        const m  = Math.floor((top +  bot)/2)
        if(matrix[m][0]>target)bot = m - 1;
        else if(matrix[m][COL] < target) top = m + 1
        else{
            break
        }
        }
        if(!(top<=bot))return false;
        const row = Math.floor((top + bot) /2)
        let l = 0 ;
        let r = COL;
        while(l <=r ){
            const mid = Math.floor((l + r )/2)
        if(target>matrix[row][mid])l = mid + 1;
        else if (target<matrix[row][mid])r =  mid -1;
        else{
            return true
        }   
        }
        
return false 
    }
}

