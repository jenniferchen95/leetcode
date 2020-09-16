// Given a binary tree, return the sum of values of its deepest leaves.
 
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

//Time O(n)
//Space O(n)
var deepestLeavesSum = function(root) {
    if (!root) return 0
    let sum 
    let queue = [root]
    
    while (queue.length) {
        let len = queue.length
        sum = 0
        for (let i = 0; i < len; i++) {
            let curr = queue.shift()
            sum += curr.val
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    } 
    return sum
};