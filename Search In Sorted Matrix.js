//Time O(n+m)
//Space O(1)

function searchInSortedMatrix(matrix, target) {
    let row = 0
    let col = matrix[0].length-1
    
    while (row <= matrix.length-1 && col >= 0) {
        if (target === matrix[row][col]) return[row, col]
        else {
            if (target < matrix[row][col]) {
                col--
            } else if (target > matrix[row][col]) {
                row++
            }
        }
    }
    return [-1, -1]
}