class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let dir = [[1,0], [-1,0],[0,1],[0,-1]];
        let ROWS = grid.length ; 
        let COLS = grid[0].length;
        let max = 0 ; 

        const dfs = (r,c) => {
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS ||
        grid[r][c] === 0)return 0 ;
        grid[r][c] = 0 ;
        let curr = 1 ; 


        for(let[dr,dc] of dir){
            console.log(curr)
            curr += dfs(r  +dr, c + dc);
        }

        return curr;

        }


        for(let r = 0 ; r < ROWS ; r++){
            for(let c = 0 ; c <COLS ; c++){
                if(grid[r][c] === 1){
                    
                max = Math.max(max,dfs(r,c))
                }
            }
        }

        return max;

    }
}
