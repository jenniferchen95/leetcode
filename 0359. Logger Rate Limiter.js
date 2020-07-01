//1) Hashmap
//Time O(1)
//Space O(N)

var Logger = function() {
    this.map = {};
};

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.map[message] === undefined) {
        this.map[message] = timestamp
        return true
    } else if (timestamp - this.map[message] >= 10) {
        this.map[message] = timestamp
        return true
    } else {
        return false
    }
};

//2) Two HashMap with less memory
//Time O(1)
//Space O(M) - where M is maximum number of unique messages in 20 second intervals

var Logger = function() {
    this.oldMap = {}
    this.newMap = {}
    this.timeNew = -Infinity
};

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (timestamp >= this.timeNew + 20) {
        this.oldMap = {}
        this.newMap = {}
        this.timeNew = timestamp
    } else if (timestamp >= this.timeNew + 10) {
        let temp = this.oldMap
        this.oldMap = this.newMap
        this.newMap = temp
        this.newMap = {}
        this.timeNew = timestamp
    }
    
    if (this.newMap[message] !== undefined) return false
    let t2 = this.oldMap[message]
    if (t2 && timestamp < t2 + 10) return false
    this.newMap[message] = timestamp
    return true 
};
