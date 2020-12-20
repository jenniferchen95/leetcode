// Given the root of a binary tree, return the preorder traversal of its nodes' values.

//Time O(n)
//Space O(n)
var preorderTraversal = function(root) {
    if (!root) return []
    let stack = [root]
    let res = []
    
    while (stack.length) {
        let curr = stack.pop()
        res.push(curr.val)
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)
    }
    
    return res
};