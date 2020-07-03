//O(1)
//O(1)

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