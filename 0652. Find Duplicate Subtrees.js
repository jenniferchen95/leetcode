// Given the root of a binary tree, return all duplicate subtrees.

// For each kind of duplicate subtrees, you only need to return the root node of any one of them.

// Two trees are duplicate if they have the same structure with the same node values.

// Example 1:

// Input: root = [1,2,3,4,null,2,4,null,null,4]
// Output: [[2,4],[4]]
// Example 2:

// Input: root = [2,1,1]
// Output: [[1]]
// Example 3:

// Input: root = [2,2,2,3,null,3,null]
// Output: [[2,3],[3]]

// Constraints:

// The number of the nodes in the tree will be in the range [1, 10^4]
// -200 <= Node.val <= 200


//1) Naive - DFS
//Time O(n^2) - Visit each node once but serialize can take most O(n)
//Space O(n^2) the size of count
var findDuplicateSubtrees = function(root) {
    let count = new Map();
    let res = []
    collect(root)
    return res
    
    function collect(root) {
        if (!root) return "#";
        let serial = root.val + "," + collect(root.left) + "," + collect(root.right)
        count.set(serial, (count.get(serial) || 0) + 1)
        if (count.get(serial) === 2) res.push(root)
        return serial
    }
};