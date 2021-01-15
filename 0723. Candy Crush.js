var candyCrush = function(board) {
    let crush = true
    
    while (crush) {
        crush = false
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length-2; j++) {
                let num = Math.abs(board[i][j])
                if (num > 0 && num === Math.abs(board[i][j+1]) && num === Math.abs(board[i][j+2])) {
                    crush = true
                    board[i][j] = board[i][j+1] = board[i][j+2] = -num
                }
            }
        }

        for (let i = 0; i < board.length-2; i++) {
            for (let j = 0; j < board[0].length; j++) {
                let num = Math.abs(board[i][j])
                if (num > 0 && num === Math.abs(board[i+1][j]) && num === Math.abs(board[i+2][j])) {
                    crush = true
                    board[i][j] = board[i+1][j] = board[i+2][j] = -num
                }
            }
        }
 
        if (crush) {
            for (let j = 0; j < board[0].length; j++) {
                let storeIdx = board.length-1
                for (let i = board.length-1; i >= 0; i--) {
                    if (board[i][j] >= 0) {
                        board[storeIdx--][j] = board[i][j]
                    }
                }
                for (let k = storeIdx; k >= 0; k--) {
                    board[k][j] = 0
                }
            }
        }
    }

    return board
};