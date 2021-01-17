// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

//Greedy
//Time O(n)
//Space O(1)
var canCompleteCircuit = function(gas, cost) {
    let startIdx = 0
    let currTotal = 0
    let total = 0
    
    for (let i = 0; i < gas.length; i++) {
        let diff = gas[i] - cost[i]
        total += diff
        currTotal += diff
        if (currTotal < 0) {
            currTotal = 0
            startIdx = i + 1
        }
    }
    
    return total >= 0 ? startIdx : -1
};