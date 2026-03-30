class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let COLS = grid[0].length;
        let ROWS = grid.length; 
        let dist = 0 ; 
        let rcset = new Set();
        let queue = new Queue();

        const change = (r,c) =>{
            if(Math.min(r,c) <0 || r === ROWS || c === COLS ||
            rcset.has(r + `,` + c) || grid[r][c] === -1) return ;

            rcset.add(r + `,` + c);
            queue.push([r,c]);            
        }

        for(let r = 0; r <ROWS; r++){
            for(let c = 0 ; c < COLS ;c++){
                if(grid[r][c] === 0){
                    queue.push([r,c])
                    rcset.add(r + `,` + c);
                }
            }
        }

        while(!queue.isEmpty()){
    for(let i = queue.size(); i > 0 ; i--){
        let [r,c] = queue.pop();
         grid[r][c] = dist;
            change(r + 1,c);
            change(r - 1, c);
            change(r, c + 1);
             change(r, c -1)
        }
        dist++
        }
    }
}

