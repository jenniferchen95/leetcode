//1) Brute force - sorting every time nlogn
var Leaderboard = function() {
    this.map = {}
};

Leaderboard.prototype.addScore = function(playerId, score) {
    this.map[playerId] = this.map[playerId] || 0
    this.map[playerId] += score
};

Leaderboard.prototype.top = function(K) {
    let sorted = Object.values(this.map).sort((a,b) => b-a)
    let sum = 0
    for (let i = 0; i < K; i++) {
        sum += sorted[i]
    }
    return sum
};

Leaderboard.prototype.reset = function(playerId) {
    this.map[playerId] = 0
}