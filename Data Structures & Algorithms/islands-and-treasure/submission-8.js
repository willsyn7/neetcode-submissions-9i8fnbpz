class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        if (!grid || grid.length === 0) return;

        let ROWS = grid.length;
        let COLS = grid[0].length;
        let visit = new Set();
        let q = [];

        const addCell = (r, c) => {
            let key = `${r},${c}`;
            if (
                r < 0 || c < 0 || 
                r >= ROWS || c >= COLS || 
                visit.has(key) || 
                grid[r][c] === -1
            ) {
                return;
            }
            visit.add(key);
            q.push([r, c]); 
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    addCell(r, c);
                }
            }
        }

        let dist = 0;

        while (q.length > 0) {
            let levelSize = q.length; 
            for (let i = 0; i < levelSize; i++) {
                let [r, c] = q.shift();
                
             
                grid[r][c] = dist;

                addCell(r + 1, c);
                addCell(r - 1, c);
                addCell(r, c + 1);
                addCell(r, c - 1);
            }
            dist++; 
        }
    }
}