class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let COLS = grid[0].length;
        let ROWS = grid.length;
        let islands = 0;

        const bfs = (r, c) => {
            let queue = [];
            queue.push([r, c]);
            grid[r][c] = '0';  // Mark as visited

            while (queue.length > 0) {
                let [row, col] = queue.shift(); // Dequeue

                for (let [dr, dc] of directions) {
                    let nr = row + dr, nc = col + dc;

                    // Check boundaries and if it's land ('1')
                    if (nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] === '1') {
                        queue.push([nr, nc]);
                        grid[nr][nc] = '0'; // Mark as visited
                    }
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    bfs(r, c);
                    islands += 1;
                }
            }
        }
        return islands;
    }
}
