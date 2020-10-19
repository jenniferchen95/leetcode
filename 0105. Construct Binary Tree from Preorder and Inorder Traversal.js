// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7


var buildTree = function(preorder, inorder) {
    return helper(0, preorder.length-1, 0, inorder.length-1)
    
    function helper(pStart, pEnd, iStart, iEnd) {
        if (pStart > pEnd || iStart > iEnd) return null
        
        let node = preorder[pStart],
            index = inorder.indexOf(node),
            nLeft = index - iStart,
            root = new TreeNode(node)
        
        root.left = helper(pStart + 1, pStart + nLeft, iStart, index - 1)
        root.right = helper(pStart + nLeft + 1, pEnd, index + 1, iEnd)
        return root
    }
};