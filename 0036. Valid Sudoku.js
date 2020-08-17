// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.


//Time O(1) 
//Space O(1)
var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        let row = new Set()
        let column = new Set()
        let square = new Set() 
        for (let j = 0; j < 9; j++) {
            let _row = board[i][j]
            let _column = board[j][i]
            let _square = board[3*Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+j%3]
            if (row.has(_row) || column.has(_column) || square.has(_square)) return false
            if (_row !== '.') row.add(_row)
            if (_column !== '.') column.add(_column)
            if (_square !== '.') square.add(_square)            
        }
    }
    return true
};
