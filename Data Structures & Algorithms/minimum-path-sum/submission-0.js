class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        let ROWS = grid.length, COLS = grid[0].length ; 
     let cache = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));

        const dfs = (r,c) => {
            if(r === ROWS -1 && c === COLS -1)return grid[r][c];

            if(r === ROWS || c === COLS)return Infinity;

            if(cache[r][c] !== -1)return cache[r][c];
            
          cache[r][c] = grid[r][c] + Math.min(dfs(r + 1,c), dfs(r,c +1)) 
          return cache[r][c]
        }


        return dfs(0,0)
    }
}
