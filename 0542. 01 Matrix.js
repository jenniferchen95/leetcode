// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:

// Input:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]
// Example 2:

// Input:
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [1,2,1]]
 
// Note:

// The number of elements of the given matrix will not exceed 10,000.
// There are at least one 0 in the given matrix.
// The cells are adjacent in only four directions: up, down, left and right.

//DP
//Time O(m*n) - Two passes 
//Space O(m*n)
var updateMatrix = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return matrix
    let dp = new Array(matrix.length).fill(0).map(_ => new Array(matrix[0].length).fill(0))
    let range = matrix.length * matrix[0].length
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                dp[i][j] = 0
            } else {
                let upCell = (i > 0) ? dp[i-1][j] : range;
                let leftCell = (j > 0) ? dp[i][j-1] : range;
                dp[i][j] = Math.min(upCell, leftCell) + 1
            }
        }
    }
    
    for (let i = matrix.length-1; i >= 0; i--) {
        for (let j =  matrix[0].length-1; j >= 0; j--) {
            if (matrix[i][j] === 0) {
                dp[i][j] = 0
            } else {
                let downCell = (i < matrix.length - 1) ? dp[i+1][j] : range;
                let rightCell = (j < matrix[0].length-1) ? dp[i][j+1] : range;
                dp[i][j] = Math.min(Math.min(downCell, rightCell) + 1, dp[i][j])
            }
        }
    }
    return dp
};

//BFS
//Time O(m*n) - One pass
//Space O(m*n) 
var updateMatrix = function(matrix) {
    let queue = []
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                queue.push([i,j])
            } else {
                matrix[i][j] = -1
            }
        }
    }
    
    let dirs = [[1,0], [-1,0], [0,1], [0,-1]]
    
    while (queue.length) {
        let curr = queue.shift()
        for (let dir of dirs) {
            let r = curr[0] + dir[0]
            let c = curr[1] + dir[1]
            if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length || matrix[r][c] !== -1) continue
            queue.push([r,c])
            matrix[r][c] = matrix[curr[0]][curr[1]]+1
        }
    }
    return matrix
};