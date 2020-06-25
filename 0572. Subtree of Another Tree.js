// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
 

// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

//Time O(M*N)
//Space O(N)
var isSubtree = function(s, t) {
    if (!s) return false;
    if (isSameTree(s,t)) return true
    return isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
        return false
    }
}