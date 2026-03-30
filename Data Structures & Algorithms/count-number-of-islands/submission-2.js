class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let directions = [[1,0],[-1,0], [0,1] , [0,-1]];
        let islands = 0;
        let COLS = grid[0].length;
        let ROWS = grid.length;

        const dfs = (r,c) => {
            if(r >= ROWS || c >= COLS || r < 0 || c < 0 ||
            grid[r][c] === '0')return ; 
            
            grid[r][c] = `0`;
            for(let [dr,dc] of directions){
                let [nr,nc] =[r + dr , c + dc];
                dfs(nr , nc)
            }
        }
        

        for(let r = 0 ; r <ROWS ; r++){
            for(let c = 0 ; c < COLS ; c++){
                if(grid[r][c] === '1'){
                    dfs(r,c);
                    islands++;
                }
        }
        
    }
    return islands
}
}
