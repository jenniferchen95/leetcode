// Implement the RandomizedSet class:

// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// Follow up: Could you implement the functions of the class with each function works in average O(1) time?

//Time O(1)
//Space O(n)
var RandomizedSet = function() {
    this.set = {}
    this.arr = []
};

RandomizedSet.prototype.insert = function(val) {
    if (this.set[val] === undefined) {
        this.set[val] = this.arr.length
        this.arr.push(val)
        return true
    } 
    return false
};

RandomizedSet.prototype.remove = function(val) {
    if (this.set[val] === undefined) return false
    let idx = this.set[val]
    let endIdx = this.arr.length-1
    this.set[this.arr[endIdx]] = idx
    this.swap(idx, this.arr.length-1)
    delete this.set[val]
    this.arr.pop()
    return true
};

RandomizedSet.prototype.swap = function(i, j) {
    let temp = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = temp
};

RandomizedSet.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * this.arr.length)
    return this.arr[random]
};
