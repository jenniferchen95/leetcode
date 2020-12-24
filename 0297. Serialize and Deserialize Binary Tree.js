// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Example 1:

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]
// Example 4:

// Input: root = [1,2]
// Output: [1,2]
 
// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000

var serialize = function(root) {
    let res = []
    dfs(root) 
    function dfs(root){
        if (!root) res.push("e ")
        if (root) {
            res.push(root.val + " ")
            dfs(root.left)
            dfs(root.right)
        }
    }
    return res.join("")
};

var deserialize = function(data) {
    let queue = data.split(" ")
    
    function helper() {
        let curr = queue.shift()
        if (curr === "e") return null
        else {
            let newTree = new TreeNode(Number(curr))
            newTree.left = helper()
            newTree.right = helper()
            return newTree
        }
    }
    return helper()
};
