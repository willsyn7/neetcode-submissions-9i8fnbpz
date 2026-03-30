class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let dir = [[1,0],[-1,0],[0,1],[0,-1]];
        let COLS = grid[0].length;
        let ROWS = grid.length ; 
        let output = 0 ; 

         const dfs = (r , c) =>{
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS ||
            grid[r][c] !== 1)return 0; 
            let curr = 1  ;
            grid[r][c] = 0;
           
            for(let [dr,dc] of dir){
                curr += dfs(r + dr,c + dc)
            }
            console.log(curr)
            return curr 
            
         }

        

        for(let r = 0 ; r < ROWS; r++){
            for(let c = 0 ; c < COLS; c++){
                if(grid[r][c] === 1){
                    output = Math.max(output,dfs(r,c))
                }
            }
        }
        return output
    }
}
