// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4
// Example 2:

// Input: matrix = [["0","1"],["1","0"]]
// Output: 1
// Example 3:

// Input: matrix = [["0"]]
// Output: 0

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

//Time O(m*n)
//Space O(m*n)
var maximalSquare = function(matrix) {
    if (!matrix.length) return 0
    let dp = new Array(matrix.length+1).fill(0).map(_=> new Array(matrix[0].length+1).fill(0))
    let max = 0
    
    for (let i = 1; i < matrix.length+1; i++) {
        for (let j = 1; j < matrix[0].length+1; j++) {
            if (matrix[i-1][j-1] === "1") {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                max = Math.max(max, dp[i][j])
            }
        }
    }
    return max*max
};