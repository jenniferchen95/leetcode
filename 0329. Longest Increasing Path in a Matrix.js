// Given an integer matrix, find the length of the longest increasing path.

// From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

// Example 1:

// Input: nums = 
// [
//   [9,9,4],
//   [6,6,8],
//   [2,1,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [1, 2, 6, 9].
// Example 2:

// Input: nums = 
// [
//   [3,4,5],
//   [3,2,6],
//   [2,2,1]
// ] 
// Output: 4 
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

//DP with memoization
//Time O(m*n)
//Space O(m*n)
var longestIncreasingPath = function(matrix) {
    let dp = new Array(matrix.length).fill(0).map(_=> new Array(matrix[0].length).fill(0))
    let max = 0
    let dirs = [[1,0], [-1,0], [0,1], [0,-1]]
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            max = Math.max(max, dfs(i,j,dp))
        }
    }
    return max
    
    function dfs(i, j, dp) {
        if (dp[i][j] !== 0) return dp[i][j]
        for (let dir of dirs) {
            let x = i + dir[0]
            let y = j + dir[1]
            if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && matrix[x][y] > matrix[i][j]) {
                dp[i][j] = Math.max(dp[i][j], dfs(x, y, dp))
            }   
        }
        dp[i][j]++
        return dp[i][j]
    }    
};

