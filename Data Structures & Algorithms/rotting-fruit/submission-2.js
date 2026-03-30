class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * Streygey
     */
    orangesRotting(grid) {
        let q = [];
        let dir = [[1,0],[-1,0],[0,-1],[0,1]];
        let ROWS = grid.length
        let COLS = grid[0].length ; 
        let count = 0 ; 
        let time = 0 ; 

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS ; c++){
                if(grid[r][c] ===1)count +=1;
                 if(grid[r][c] === 2 )q.push([r,c])
            }
        }

        while(count > 0 && q.length > 0){
            let l = q.length ; 
            for(let i  = 0 ; i < l; i++){
                let [r,c] = q.shift();

    
                for(let [dr,dc] of dir ){
                let nr = r + dr
                let nc = c + dc
                    if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === 1){
                        grid[nr][nc] = 2;
                        q.push([nr,nc]);
                        count--;
                    }

                }
            }
            time+=1
        }
        if(count === 0)return time;
        else{
            return -1
        }

        




    }
}
