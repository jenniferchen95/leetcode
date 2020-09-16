// Given an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Follow up:

// Recursive solution is trivial, could you do it iteratively?

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [5,6,3,2,4,1]
// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]

//1) Iterative
//Time O(n)
//Space O(n)
var postorder = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    
    while (stack.length) {
        let curr = stack.pop()
        for (let child of curr.children) {
            stack.push(child)
        }
        res.push(curr.val)
    }
    return res.reverse()
};

//2) Recursive
//Time O(n)
//Space O(n)
var postorder = function(root) {
    let res = []
    traverse(root)
    return res
    
    function traverse(root) {
        if (!root) return 
        for (let child of root.children) {
            traverse(child)
        }
        res.push(root.val)
    }
};