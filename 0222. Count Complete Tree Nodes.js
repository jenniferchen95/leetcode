// Given a complete binary tree, count the number of nodes.

// Note:

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Example:

// Input: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// Output: 6

//Time O(d^2) = O(logn * logn)
//Space O(1) 
var countNodes = function(root) {
    if (!root) return 0
    let d = getDepth(root)
    
    function getDepth(node) {
        let d = 0
        while (node.left) {
            node = node.left
            d++
        }
        return d
    }
    
    let l = 1
    let r = 2**d - 1
    while (l <= r) {
        let m = Math.floor(l + (r-l)/2)
        if (exists(m, d, root)) l = m + 1;
        else r = m - 1;
    }
    return 2**d - 1 + l
    
    function exists(idx, d, node) {
        let l = 0
        let r = 2**d - 1
        while (l < r) {
            let m = Math.floor(l + (r-l)/2)
            if (idx > m) {
                node = node.right;
                l = m + 1;
            } else {
                node = node.left;
                r = m
            }
        }
        return node !== null
    }
};