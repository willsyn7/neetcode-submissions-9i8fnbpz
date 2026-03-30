class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead
     * Intptu : boar d= grid filled iwht X and O 
     * Output : Null , reassign values on a baord
     * 1. Declare ROWS and COLS vairaibles 
     * 2. Delcare a dfs function that accepts r and c as parmarnters
     * 3. Delcare an if stamtent aht will check if r,c is on the border,
     * value at r,c is !== O , if r == rows, c == COLS,
     *  return
     * 4. Reassign the value at r,c to the value of T
     * 5. Call DFs reucievielly with all direcitoins
     * 6. Delcare a for loop itniizle r at 0 till rows is sreached
     * a) If grid[r][0] ===  "O" call funcdion with r an 0 
     * b) if grid[r][COLS -1] === "O " call fudnion with
     * 7. Declare a for loop to itterate rhoguh COLS intizlie at 0 
     * a) Declare an if smtenat thec heckes if grid[0][c] ==- " O";
     * b)Delcare an if stmant that echeks if grid[ROWS -1][c] = O, callddfs fucniton
     * 8. use af or loop to itterat throguht eh tenitr egir d
     * a) Use an if statmetn to checkes if grid[r][c] === 0, if so cahgne value to X 
     * b ) Declare an ifs onco that changes value of T to O  
     */
    solve(board) {
        let ROWS = board.length ; 
        let COLS = board[0].length;

        const dfs = (r,c) =>{
            if(r < 0 || c < 0 || r == ROWS || c == COLS ||board[r][c] !== "O")return;
            board[r][c] = "T";
            dfs(r + 1, c);
            dfs(r -1 , c);
            dfs(r, c + 1);
            dfs(r,c - 1);
            
        } 

        for(let r = 0 ; r< ROWS ; r++){
            if(board[r][0] === "O")dfs(r,0);
            if(board[r][COLS -1 ] === "O")dfs(r,COLS -1 );
        }
        for(let c = 0 ; c< COLS ; c++){
            if(board[0][c] === "O")dfs(0,c);
            if(board[ROWS -1][c] === "O")dfs(ROWS -1,c); 
        }

        for(let r = 0 ; r< ROWS ; r++){
            for(let  c = 0 ; c < COLS;c++){
                if(board[r][c] === "O")board[r][c] = "X";
                else if(board[r][c] === "T")board[r][c] = "O";

            }
        }



    }
}
