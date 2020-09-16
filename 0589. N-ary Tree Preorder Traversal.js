// Given an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Follow up:

// Recursive solution is trivial, could you do it iteratively?

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]



//1) Iterative 
//Time O(n)
//Space O(n)
var preorder = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    
    while (stack.length) {
        let curr = stack.pop()
        for (let i = curr.children.length-1; i >= 0; i--) {
            stack.push(curr.children[i])
        }
        res.push(curr.val)
    }
    return res
};

//2) Recursive
//Time O(n)
//Space O(n), avg case O(logn)
var preorder = function(root) {
    let res = []
    traverse(root)
    return res
    
    function traverse(root) {
        if (!root) return 
        res.push(root.val)
        for (let child of root.children) {
            traverse(child)
        }
    }
};
