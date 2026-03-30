class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let dir = [[1,0],[-1,0],[0,-1],[0,1]];
        let COLS = grid[0].length;
        let ROWS = grid.length;
        let islands = 0 ; 


        const dfs = (r,c) => {
        if(r < 0  || c < 0 || r >= ROWS || c >= COLS || 
        grid[r][c] !== '1')return;
        grid[r][c] = 0 ;

        for(let [dr,dc] of dir){
            dfs(r + dr, c + dc)
        }
        }

        for(let r = 0 ; r < ROWS; r++){
            for(let c =0 ; c < COLS ; c++){
                if(grid[r][c] === "1"){
                    dfs(r,c);
                    islands+=1
                }
            }
        }

        return islands
    }
}
