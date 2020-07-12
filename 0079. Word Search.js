// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
 

// Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3

var exist = function(board, word) {
    if (!board) return false
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
    
    function dfs(i, j, index) {
        if (index === word.length) return true
        
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) return false;
        board[i][j] = "#"
        
        let res = (
            dfs(i+1, j, index+1) || 
            dfs(i-1, j, index+1) ||
            dfs(i, j+1, index+1) ||
            dfs(i, j-1, index+1) 
        )
            
        board[i][j] = word[index]
        return res
    }
};
