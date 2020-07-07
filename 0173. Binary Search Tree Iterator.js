// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

// Example:

// BSTIterator iterator = new BSTIterator(root);
// iterator.next();    // return 3
// iterator.next();    // return 7
// iterator.hasNext(); // return true
// iterator.next();    // return 9
// iterator.hasNext(); // return true
// iterator.next();    // return 15
// iterator.hasNext(); // return true
// iterator.next();    // return 20
// iterator.hasNext(); // return false
 
// Note:

// - next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
// - You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

//Time next/hasnext O(1)
//Space O(n) 
var BSTIterator = function(root) {
    this.arr = []
    this.index = 0;
    
    const dfs = (root) => {
        if (!root) return;
        dfs(root.left)
        this.arr.push(root.val)
        dfs(root.right)
    }
    dfs(root)
};

BSTIterator.prototype.next = function() {
    return this.arr[this.index++]
};

BSTIterator.prototype.hasNext = function() {
    return this.index < this.arr.length
};

//Time next/hasnext O(1) average
//Space O(h)

var BSTIterator = function(root) {
    this.stack = []
    while (root) {
        this.stack.push(root)
        root = root.left
    }
};

BSTIterator.prototype.next = function() {
    let node = this.stack.pop()
    let curr = node.right
    
    while (curr) {
        this.stack.push(curr)
        curr = curr.left
    }
    
    return node.val
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};