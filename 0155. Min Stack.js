// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

//Time O(1)
//Space O(n)

var MinStack = function() {
    this.stack = []
    this.min = []
};

MinStack.prototype.push = function(x) {
    if (x <= this.min[this.min.length-1] || this.min.length === 0) this.min.push(x)
    this.stack.push(x)
};

MinStack.prototype.pop = function() {
    let res = this.stack.pop()
    if (res === this.min[this.min.length-1]) {
        this.min.pop()
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */