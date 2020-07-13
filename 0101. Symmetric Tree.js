// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

//Time O(n)
//Space O(n)
var isSymmetric = function(root) {
    if (!root) return true
    
    function isMirror(t1, t2) {
        if (!t1 && !t2) return true
        if (!t1 || !t2) return false
        
        return t1.val === t2.val 
            && isMirror(t1.left, t2.right)
            && isMirror(t1.right, t2.left)
    }
    
    return isMirror(root.left, root.right)
};