// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

//Time O(m*n)
//Space O(1)
//0 -> 1 = 2
//1 -> 0 = -1

var gameOfLife = function(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let cell = board[i][j]
            let neighbors = getNeighbors(i, j)
            if (cell === 0 && neighbors === 3) {
                board[i][j] = 2
            }
            if (cell === 1 && (neighbors > 3 || neighbors < 2)) {
                board[i][j] = -1
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === -1) board[i][j] = 0
            if (board[i][j] === 2) board[i][j] = 1
        }
    }
    
    function getNeighbors(r, c) {
        let count = 0
        for (let i = r-1; i <= r+1; i++) {
            for (let j = c-1; j <= c+1; j++) {
                if (!(r === i && c === j) && i >= 0 && i < board.length && j >= 0 && j < board[0].length) {
                    if (Math.abs(board[i][j]) === 1) count++
                }
            }
        }
        return count
    }
};