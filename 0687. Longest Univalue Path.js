// Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

// The length of the path between two nodes is represented by the number of edges between them.

// Example 1:

// Input: root = [5,4,5,1,1,5]
// Output: 2
// Example 2:

// Input: root = [1,4,5,4,4,5]
// Output: 2
 
// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000
// The depth of the tree will not exceed 1000.


//Time O(n)
//Space O(h)
var longestUnivaluePath = function(root) {
    let max = 0
    helper(root)
    return max
    
    function helper(root) {
        if (!root) return 0
        let left = helper(root.left)
        let right = helper(root.right)
        let arrowLeft = 0, arrowRight = 0
        if (root.left && root.val === root.left.val) {
            arrowLeft += left + 1
        } 
        if (root.right && root.val === root.right.val) {
            arrowRight += right + 1
        } 
        max = Math.max(max, arrowLeft + arrowRight)
        return Math.max(arrowLeft, arrowRight)
    }
};