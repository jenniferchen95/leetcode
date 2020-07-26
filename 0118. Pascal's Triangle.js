// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

//Time O(numRows^2)
//Space O(numRows^2)

var generate = function(numRows) {
    if (numRows === 0) return []
    let res = []
    
    for (let i = 0; i < numRows; i++) {
        let temp = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) temp.push(1)
            else temp.push(res[i-1][j] + res[i-1][j-1])
        }
        res.push(temp)
    }
    return res
};