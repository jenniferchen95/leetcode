// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

//Time O(n) - Exactly n calls to recursive function and each call is O(1)
//Space O(logn) - Recursion stack
var sortedArrayToBST = function(nums) {
    return helper(0, nums.length-1) 
    
    function helper(l, r) {
        if (l > r) return null;
        let m = Math.floor(l + (r-l)/2)
        return new TreeNode(nums[m], helper(l, m-1), helper(m+1, r))
    }
}