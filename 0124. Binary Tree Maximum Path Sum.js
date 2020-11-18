// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any node sequence from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Example 2:

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42

// Constraints:

// The number of nodes in the tree is in the range [0, 3 * 104].
// -1000 <= Node.val <= 1000

//Time O(n)
//Space O(d) - depth of tree

var maxPathSum = function(root) {
    let max = -Infinity
    helper(root)
    return max
    
    function helper(root) {
        if (!root) return 0
        let left = helper(root.left)
        let right = helper(root.right)
        max = Math.max(max, left + right + root.val)
        return Math.max(0, left + root.val, right + root.val)
    }
};