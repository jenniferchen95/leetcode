// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3
// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

//1) Recursive Inorder Traversal
//Time O(n)
//Space O()
var kthSmallest = function(root, k) {
    let res = null
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        k--
        if (k === 0) {
            res = root.val 
            return;
        }
        dfs(root.right)
    }
    dfs(root)
    return res
};


//2) Iterative
//Time O(h)
//Space O(h)
var kthSmallest = function(root, k) {
    let stack = [];
    while (true) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        k--
        if (k === 0) return root.val
        root = root.right
    }
};
