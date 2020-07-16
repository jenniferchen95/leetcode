// Create a timebased key-value store class TimeMap, that supports two operations.

// 1. set(string key, string value, int timestamp)

// Stores the key and value, along with the given timestamp.
// 2. get(string key, int timestamp)

// Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
// If there are multiple such values, it returns the one with the largest timestamp_prev.
// If there are no values, it returns the empty string ("").


//Time  Set: O(1)
    //  Get: O(logn)
//Space O(n)

var TimeMap = function() {
    this.map = {}
};

// /** 
//  * @param {string} key 
//  * @param {string} value 
//  * @param {number} timestamp
//  * @return {void}
//  */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key] === undefined) {
        this.map[key] = []
    }
    this.map[key].push({timestamp: timestamp, value: value})
};

// /** 
//  * @param {string} key 
//  * @param {number} timestamp
//  * @return {string}
//  */
TimeMap.prototype.get = function(key, timestamp) {
    return this.binarySearch(this.map[key], timestamp)
};

TimeMap.prototype.binarySearch = function(list, timestamp) {
    if (list.length === 1) return list[0].value
    let l = 0
    let r = list.length - 1
    let mid 
    while (l <= r) {
        mid = Math.floor(l + (r-l)/2)
        if (list[mid].timestamp === timestamp) return list[mid].value
        if (timestamp < list[mid].timestamp) r = mid - 1
        else l = mid + 1
    }
    return list[mid].timestamp < timestamp ? list[mid].value : list[mid-1] ? list[mid-1].value : ""
}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */