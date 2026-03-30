class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let dir = [[1,0],[-1,0],[0,1],[0,-1]];
        let ROWS = grid.length ; 
        let COLS = grid[0].length;
        let queue = [];
        let set1 = new Set();

        const addcord = (r,c) =>{
        if(r < 0 || c < 0 || c >= COLS || r >= ROWS || 
        grid[r][c] === -1 || set1.has(r + `,` + c))return;
    
        set1.add(r + `,` + c );
        queue.push([r,c])     
        }


        for(let r = 0 ; r < ROWS; r++){
            for(let c = 0 ; c < COLS ; c++){
                if(grid[r][c] === 0){
                    queue.push([r,c])
                    set1.add(r + `,` + c);
                }
            }
       

        }
             let curr = 0; 
  while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let [r, c] = queue.shift();
                grid[r][c] = curr;

                for (let [dr, dc] of dir) {
                    addcord(r + dr, c + dc);
                }
            }
            curr++;
        }
    }
}

