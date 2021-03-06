// Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)

// A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.

// Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.

 

// Example 1:

// Input: [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// Output: 3
// Explanation: 
// There are three 1s that are enclosed by 0s, and one 1 that isn't enclosed because its on the boundary.
// Example 2:

// Input: [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// Output: 0
// Explanation: 
// All 1s are either on the boundary or can reach the boundary.

//DFS
var numEnclaves = function(A) {
    let count = 0
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (i === 0 || j === 0 || i === A.length-1 || j === A[0].length-1) {
                dfs(i, j)
            }
        }
    }
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] === 1) {
                count++
            }
        }
    }        
    return count
    
    function dfs(i, j) {
        if (i < 0 || i >= A.length || j < 0 || j >= A[0].length || A[i][j] === 0 || A[i][j] !== 1) return
        A[i][j] = 0
        dfs(i+1, j)
        dfs(i-1, j)
        dfs(i, j-1)
        dfs(i, j+1)
    }
};