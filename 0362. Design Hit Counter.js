//Time O(1) - hit/gethits
//Space O(1) - size of queue which is max 300 = O(1)

var HitCounter = function() {
    this.queue = []
};

HitCounter.prototype.hit = function(timestamp) {
    this.queue.push(timestamp)
};

HitCounter.prototype.getHits = function(timestamp) {
    while (this.queue.length && timestamp-this.queue[0] >= 300) {
        this.queue.shift();
    }
    return this.queue.length
};