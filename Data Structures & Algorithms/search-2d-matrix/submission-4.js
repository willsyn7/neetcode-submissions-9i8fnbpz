class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0 || matrix[0].length === 0) {
            return false; // Handle empty matrix
        }

        let ROW = matrix.length; // total number of rows in the matrix
        let COL = matrix[0].length; // number of columns in the matrix
        let top = 0;
        let bot = ROW - 1;

        // First while loop to find the correct row
        while (top <= bot) {
            let row = Math.floor((top + bot) / 2);
            if (target > matrix[row][COL - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bot = row - 1;
            } else {
                // Target is in the current row
                break;
            }
        }

        // If we exited the loop without finding a row, return false
        if (top > bot) {
            return false;
        }

        const row = Math.floor((top + bot) / 2);
        let l = 0;
        let r = COL - 1; // Set right boundary correctly

        // Second while loop to search within the row
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (target > matrix[row][mid]) {
                l = mid + 1;
            } else if (target < matrix[row][mid]) {
                r = mid - 1;
            } else {
                return true; // Found the target
            }
        }

        return false; // Target not found
    }
}