// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

//Time O(n)
//Space O(n)

var levelOrderBottom = function(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    
    while (queue.length) {
        let level = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            level.push(curr.val)
            
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        res.unshift(level)
    }
    return res
};