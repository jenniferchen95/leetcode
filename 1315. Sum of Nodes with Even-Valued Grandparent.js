// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

// Example 1:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

//Iterative
//Time O(n)
//Space O(n)
var sumEvenGrandparent = function(root) {
    if (!root) return 0
    let sum = 0
    let queue = [root]
    
    while (queue.length) {
        let curr = queue.shift()
        
        if (curr.left) {
            queue.push(curr.left)
            if (curr.val%2 === 0) {
                if (curr.left.left) {
                    sum += curr.left.left.val
                } 
                if (curr.left.right) {
                    sum += curr.left.right.val
                }      
            }
        }
        if (curr.right) {
            queue.push(curr.right)
            if (curr.val%2 === 0) {
                if (curr.right.left) {
                    sum += curr.right.left.val
                } 
                if (curr.right.right) {
                    sum += curr.right.right.val
                }     
            }
        }
        
    }
    return sum
};

//Recursive
var sumEvenGrandparent = function(root) {
    return helper(root, 1, 1)
    
    function helper(root, p, gp) {
        if (!root) return 0
        return helper(root.left, root.val, p) + helper(root.right, root.val, p) + (gp%2 === 0 ? root.val : 0)
    }
    
};