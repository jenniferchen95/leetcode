// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

//Time O(n)
//Space O(n)
var levelOrder = function(root) {
    if (!root) return []
    let queue = [[root, 0]]
    let res = []

    while (queue.length > 0) {
        let curr = queue.shift();
        let node = curr[0]
        let level = curr[1]

        if (!res[level]) {
            res[level] = [node.val]
        } else {
            res[level].push(node.val)
        }
        if (node.left) queue.push([node.left, level+1]) 
        if (node.right) queue.push([node.right, level+1])
    }
    return res
};