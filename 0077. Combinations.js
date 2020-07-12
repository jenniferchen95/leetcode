// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]


//Time
//Space
var combine = function(n, k) {
    let res = []
    
    function combineHelper(index, temp) {
        if (temp.length === k) res.push(temp)
        
        for (let i = index; i <= n; i++) {
            combineHelper(i+1, temp.concat([i]))
        }
    }
    combineHelper(1, [])
    return res
};