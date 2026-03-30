class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     * Stregayeyt: Run dfs if the current island is euqal to 1, chagne all connecting 
     * dots to the value of 0, then incmrent hte total islands by 1 . Then keep itterating till
     * all nodes are visitied. 
     * 1 Initiziel direcitons, itinziel islands = 0 , 
     * Intizile COLS and ROS
     * 
     * 
     * 
     * Use a nested for loop staritng a r= 0 til  rows is reached t
     * 
     */
    numIslands(grid) {
        let islands = 0;
        let direcitons = [[1,0], [-1,0], [0,1], [0,-1]];
        let COLS = grid[0].length ; 
        let ROWS = grid.length ; 

        const dfs = (r,c) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS ||
            grid[r][c] !== "1")return; 

            grid[r][c] = "0" ;

            for(let [dr,dc] of direcitons ){
                dfs(r + dr,c + dc)
            }
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0 ; c < COLS ; c++){
                if(grid[r][c] === "1"){
                    // console.log(`banna`)
                    dfs(r,c);
                    islands++;
                }
            }
        }
        return islands




    }
}
