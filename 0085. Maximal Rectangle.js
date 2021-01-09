// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.
// Example 2:

// Input: matrix = []
// Output: 0
// Example 3:

// Input: matrix = [["0"]]
// Output: 0
// Example 4:

// Input: matrix = [["1"]]
// Output: 1
// Example 5:

// Input: matrix = [["0","0"]]
// Output: 0
 
// Constraints:

// rows == matrix.length
// cols == matrix.length
// 0 <= row, cols <= 200
// matrix[i][j] is '0' or '1'.

//Time O(m*n)
//Space O(n) - size of height array
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0
    let height = new Array(matrix[0].length+1).fill(0)
    let max = 0
    
    for (let row of matrix) {
        for (let i = 0; i < matrix[0].length; i++) {
            height[i] = row[i] === '1' ? height[i] + 1 : 0
        }
        let stack = [-1]
        for (let i = 0; i < height.length; i++) {
            while (height[i] < height[stack[stack.length-1]]) {
                let h = height[stack.pop()]
                let w = i - stack[stack.length-1]-1
                max = Math.max(max, h*w)
            }
            stack.push(i)
        }
    }
    
    return max
};