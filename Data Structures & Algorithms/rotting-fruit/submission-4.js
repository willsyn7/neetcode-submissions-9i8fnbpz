class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let oranges = 0 ; 
        let time = 0 ; 
        let ROWS = grid.length ; 
        let COLS = grid[0].length ; 
        let q = [];
        let dir = [[1,0],[-1,0],[0,-1],[0,1]];
        
        for(let r = 0 ;r < ROWS ; r++){
            for(let c = 0 ; c < COLS ; c++){
                if(grid[r][c] === 1)oranges +=1;
                else if (grid[r][c] === 2)q.push([r,c])
            }
        }

        while(q.length > 0 && oranges > 0){
            let l = q.length ; 

            for(let i = 0 ;i < l ; i++){
                const [cr,cc] = q.shift();
                for(let [dr,dc] of dir){
                    let nr = dr + cr;
                    let nc = dc + cc;
                
                if(nr >= 0 && nc >= 0 && nr < ROWS & nc < COLS 
                && grid[nr][nc] === 1){
                    grid[nr][nc] = 2;
                    oranges-=1;

                    q.push([nr,nc]);
                }
                }
            }
            time++
        }
     
           return oranges === 0 ? time : -1;

    }
}
