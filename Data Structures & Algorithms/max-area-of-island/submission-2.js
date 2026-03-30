class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let directions = [[1,0], [-1,0], [0,1], [0,-1]];
        let area = 0 ;
        let COLS = grid[0].length
        let ROWS = grid.length;

        const dfs = (r,c) =>{
        if(r < 0 || c < 0 || r >= ROWS  || c >= COLS ||
        grid[r][c] === 0)return 0 ;


        let curr = 1 
        grid[r][c]= 0 ;


        for(let [dr,dc] of directions){
           curr += dfs(r + dr,c + dc)
        }
        return curr
        }
        
        for(let r = 0 ; r < ROWS ; r++){
            for(let c = 0; c <COLS ; c++){
                if(grid[r][c] === 1){
                    area =  Math.max(area,dfs(r,c))
                }
            }
        }
        return area
    }
}
