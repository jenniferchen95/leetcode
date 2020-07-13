// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

//1) Recursion
//Time O(n)
//Space O(n)
var invertTree = function(root) {
    if (!root) return root;
    
    let temp = root.right
    root.right = invertTree(root.left)
    root.left = invertTree(temp)
    
    return root;
}

//2) Iterative
//Time O(n)
//Space O(n)
var invertTree = function(root) {
    if (!root) return root;
     
     let queue = [root]
     
     while (queue.length > 0) {
         let curr = queue.shift();
         let temp = curr.left
         curr.left = curr.right
         curr.right = temp
         
         if (curr.left) queue.push(curr.left)
         if (curr.right) queue.push(curr.right)
     }
     return root;
 };
    