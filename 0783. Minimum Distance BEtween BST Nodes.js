// Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

// Example :

// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.

// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

//           4
//         /   \
//       2      6
//      / \    
//     1   3  

// while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
// Note:

// The size of the BST will be between 2 and 100.
// The BST is always valid, each node's value is an integer, and each node's value is different.
// This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

//Time O(n)
//Space O(h) - height of tree 
var minDiffInBST = function(root) {
    let prev = null
    let min = Number.MAX_SAFE_INTEGER
    dfs(root)
    return min
    
    function dfs(root) {
        if (!root) return 
        dfs(root.left)
        if (prev) {
            min = Math.min(min, root.val-prev)
        }
        prev = root.val
        dfs(root.right)
    }
};

//Time O(n)
//Space O(n)
var getMinimumDifference = function(root) {
    let res = []
    dfs(root)
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < res.length-1; i++) {
        min = Math.min(min, Math.abs(res[i]-res[i+1]))
    }
    return min
    
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
};