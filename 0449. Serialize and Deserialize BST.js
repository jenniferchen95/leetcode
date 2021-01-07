// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

// Example 1:

// Input: root = [2,1,3]
// Output: [2,1,3]
// Example 2:

// Input: root = []
// Output: []
 
// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The input tree is guaranteed to be a binary search tree.


//Time O(n)
//Space O(n)
var serialize = function(root) {
    let res = []
    helper(root)
    return res.join(",")
    
    function helper(root) {
        if (root) {
            res.push(root.val)
            helper(root.left)
            helper(root.right)
        }
    }
};

var deserialize = function(data) {
    if (!data.length) return null
    let queue = data.split(",")
    return helper(queue, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    
    function helper(queue, lower, upper) {
        if (!queue.length) return null
        let s = queue[0]
        let val = parseInt(s)
        if (val < lower || val > upper) return null;
        queue.shift()
        let newTree = new TreeNode(val)
        newTree.left = helper(queue, lower, val)
        newTree.right = helper(queue, val, upper)
        return newTree
    }
};