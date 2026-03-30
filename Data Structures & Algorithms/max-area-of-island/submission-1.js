class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * 1. Declale 
     */
    maxAreaOfIsland(grid) {
        let directions = [[1,0], [-1,0],[0,1],[0,-1]];
        // let area = 0 ;
         let res  = 0 ;
        let COLS = grid[0].length;
        let ROWS  = grid.length;

        
        const dfs = (r,c) => {
        if(r < 0 || c< 0 || c >= COLS || r >= ROWS || 
        grid[r][c] === 0)return 0 ;
        
        let area  = 1;

        grid[r][c] = 0;

        for(const [dr, dc] of directions){
            area += dfs(r + dr, c + dc )
        }

        return area 
        }
        


        for(let r = 0 ; r < ROWS; r++){
            for(let c = 0 ; c < COLS; c++){
                if(grid[r][c] === 1){
                   res = Math.max(res,dfs(r,c))
                }
            }
        }
        return res ;

    }
}
