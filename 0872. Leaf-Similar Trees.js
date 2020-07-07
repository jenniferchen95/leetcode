// Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Constraints:

// Both of the given trees will have between 1 and 200 nodes.
// Both of the given trees will have values between 0 and 200

//Time O(T1 + T2)
//Space O(T1 + T2)

var leafSimilar = function(root1, root2) {
    let first = helper(root1)
    let second = helper(root2)
    return first.join(" ") === second.join(" ")
};

function helper(root, res = []) {
    if (!root.left && !root.right) res.push(root.val)
    if (root.left) helper(root.left, res)
    if (root.right) helper(root.right, res)
    return res
}