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

//2) Using heap w/ Python
//Top - O(nlogK)
//Space - O(n+K)
/*
class Leaderboard:

    def __init__(self):
        self.scores = {}
        
    def addScore(self, playerId: int, score: int) -> None:
        if playerId not in self.scores:
            self.scores[playerId] = 0
        self.scores[playerId] += score

    def top(self, K: int) -> int:
        heap = []
        for x in self.scores.values():
            heapq.heappush(heap, x)
            if len(heap) > K:
                heapq.heappop(heap)
        
        res = 0
        while heap:
            res += heapq.heappop(heap)
        return res

    def reset(self, playerId: int) -> None:
        self.scores[playerId] = 0
*/