// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

//Time O(n)
//Space O(d) -> D = tree diameter/length of queue

var rightSideView = function(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (i === len-1) res.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }
    return res
};