// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


//Time O(n) - # of elements in matrix
//Spaec O(n)
var spiralOrder = function(matrix) {
    if (!matrix.length) return []
    
    let sR = 0, eR = matrix.length-1, sC = 0, eC = matrix[0].length-1
    let res = []
    
    while (sR <= eR && sC <= eC) {
        for (let i = sC; i <= eC; i++) {
            res.push(matrix[sR][i])
        }
        
        for (let i = sR+1; i <= eR; i++) {
            res.push(matrix[i][eC])
        }
        
        for (let i = eC-1;  i >= sC; i--) {
            if (sR === eR) break
            res.push(matrix[eR][i])
        }
        
        for (let i = eR-1; i > sR; i--) {
            if (sC === eC) break
            res.push(matrix[i][sC])
        }
        
        sR++
        eR--
        sC++
        eC--
    }
    
    return res
};