// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
// A customer with a card id equal to id, gets in the station stationName at time t.
// A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
// A customer with a card id equal to id, gets out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
// Returns the average time to travel between the startStation and the endStation.
// The average time is computed from all the previous traveling from startStation to endStation that happened directly.
// Call to getAverageTime is always valid.
// You can assume all calls to checkIn and checkOut methods are consistent. If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1. All events happen in chronological order.


//Time O(1)
//Space O(P + S^2) - P being number of passengers and S being number of stations (expected to make a route for all of them at worst case) 
var UndergroundSystem = function() {
    this.in = {}
    this.out = {}
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.in[id] = [stationName, t]
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let route = this.in[id][0] + "-" + stationName
    let time = t - this.in[id][1]
    if (!this.out[route]) {
        this.out[route] = [1, time]
    } else {
        this.out[route][0]++
        this.out[route][1]+= time
    }
};

UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    return this.out[startStation + "-" + endStation][1]/this.out[startStation + "-" + endStation][0]
};