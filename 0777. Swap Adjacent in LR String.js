// In a string composed of 'L', 'R', and 'X' characters, like "RXXLRXRXL", a move consists of either replacing one occurrence of "XL" with "LX", or replacing one occurrence of "RX" with "XR". Given the starting string start and the ending string end, return True if and only if there exists a sequence of moves to transform one string to the other.

// Example 1:

// Input: start = "RXXLRXRXL", end = "XRLXXRRLX"
// Output: true
// Explanation: We can transform start to end following these steps:
// RXXLRXRXL ->
// XRXLRXRXL ->
// XRLXRXRXL ->
// XRLXXRRXL ->
// XRLXXRRLX
// Example 2:

// Input: start = "X", end = "L"
// Output: false
// Example 3:

// Input: start = "LLR", end = "RRL"
// Output: false
// Example 4:

// Input: start = "XL", end = "LX"
// Output: true
// Example 5:

// Input: start = "XLLR", end = "LXLX"
// Output: false

//Time O(n)
//Space O(1)
var canTransform = function(start, end) {
    let count = 0

    for (let i = 0; i < start.length; i++) {
        if (start[i] === "X") count++
        if (end[i] === "X") count--
    }
    if (count !== 0) return false
    
    let i = 0
    let j = 0
    
    while (i < start.length && j < end.length) {
        while (start[i] === 'X') i++
        while (end[j] === 'X') j++
        
        if (i === start.length || j === end.length) {
            return i === start.length && j === end.length
        }
        
        if (start[i] !== end[j]) return false
        if (start[i] === "R" && i > j) return false
        if (start[i] === "L" && i < j) return false
        
        i++
        j++
    }
    return true
};