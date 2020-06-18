// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

//Recursive
//Time O(n) - n # of nodes
//Space O(logn) - worst case unbalanced - O(n)

var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

//Iterative BFS
//Time O(n)
//Space O(logn) - worst case unbalanced - O(n)
var maxDepth = function(root) {
    if (!root) return 0
    let depth = 0
    let queue = [root]
    
    while (queue.length > 0) {
        depth++ 
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let curr = queue.shift()
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }
    return depth
};