// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]
// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]

//1) Reverse and Transpose (Swapping rows and columns)
//Time O(n^2)
//Space O(1) - in place
var rotate = function(matrix) {
    matrix = matrix.reverse()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};

//2) Rotating in place
//Time O(n^2)
//Space O(1)
var rotate = function(matrix) {
    let size = matrix.length-1
    
    for (let layer = 0; layer < Math.floor(matrix.length/2); layer++) {
        for (let i = layer; i < size-layer; i++) {
            let top = matrix[layer][i]
            let right = matrix[i][size-layer]
            let bottom = matrix[size-layer][size-i]
            let left = matrix[size-i][layer]
            
            matrix[layer][i] = left
            matrix[i][size-layer] = top
            matrix[size-layer][size-i] = right
            matrix[size-i][layer] = bottom
        }
    }
};