// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

//1
//Time O(n)
//Space O(h)
var isBalanced = function(root) {
    return getHeight(root) !== -1
    
    function getHeight(root) {
        if (!root) return 0
        let left = getHeight(root.left)
        let right = getHeight(root.right)
        if (left === -1 || right === -1 || Math.abs(left-right) > 1) return -1
        return 1 + Math.max(left, right)
    }
};

//2) Visits same nodes multiple times 
//Time O(nlogn)
//Space O(h)
var isBalanced = function(root) {
    if (!root) return true
    let left = getDepth(root.left)
    let right = getDepth(root.right)
    
    return Math.abs(left-right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    
    
    function getDepth(root) {
        if (!root) return 0
        return Math.max(getDepth(root.left), getDepth(root.right)) + 1
    }
};