// Implement a SnapshotArray that supports the following interface:

// SnapshotArray(int length) initializes an array-like data structure with the given length.  Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
 

// Example 1:

// Input: ["SnapshotArray","set","snap","set","get"]
// [[3],[0,5],[],[0,6],[0,0]]
// Output: [null,null,0,null,5]
// Explanation: 
// SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
// snapshotArr.set(0,5);  // Set array[0] = 5
// snapshotArr.snap();  // Take a snapshot, return snap_id = 0
// snapshotArr.set(0,6);
// snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
 

// Constraints:

// 1 <= length <= 50000
// At most 50000 calls will be made to set, snap, and get.
// 0 <= index < length
// 0 <= snap_id < (the total number of times we call snap())
// 0 <= val <= 10^9

//Time
    // Set O(1)
    // Snap O(1)
    // Get O(snap_id) 
//Space O(n)
var SnapshotArray = function(length) {
    this.arr = []
    this.snapId = 0
};

SnapshotArray.prototype.set = function(index, val) {
    if (this.arr[index] === undefined) {
        let map  = new Map()
        map.set(this.snapId, val)
        this.arr[index] = map
    } else {
        this.arr[index].set(this.snapId, val)
    }
};

SnapshotArray.prototype.snap = function() {
    this.snapId++
    return this.snapId - 1
};

SnapshotArray.prototype.get = function(index, snap_id) {
    if (this.arr[index] === undefined) return null;
    while (snap_id >= 0 && !this.arr[index].get(snap_id)) {
        snap_id--
    }
    return snap_id >= 0 ? this.arr[index].get(snap_id) : null
};
