// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]
 
// Constraints:

// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

//Time O(m*n)
//Space O(n)
var calcEquation = function(equations, values, queries) {
    let res = new Array(queries.length)
    let graph = new Map();
    
    for (let i = 0; i < equations.length; i++) {
        let equation = equations[i]
        if (!graph.has(equation[0])) {
            graph.set(equation[0], new Map())
        }
        if (!graph.has(equation[1])) {
            graph.set(equation[1], new Map())
        }
        graph.get(equation[0]).set(equation[1], values[i])
        graph.get(equation[1]).set(equation[0], 1/values[i])
    }
    
    for (let i = 0; i < queries.length; i++) {
        res[i] = getPathWeight(graph, queries[i][0], queries[i][1], new Map())
    }
    
    return res
};

function getPathWeight(graph, start, end, visited) {
    if (!graph.has(start)) return -1
    if (graph.get(start).has(end)) return graph.get(start).get(end)
    
    visited.set(start, true)
    
    let neighbors = [...graph.get(start).keys()]
    for (let i = 0; i < neighbors.length; i++) {
        if (!visited.has(neighbors[i])) {
            let prodWeight = getPathWeight(graph, neighbors[i], end, visited) 
            if (prodWeight !== -1) {
                return graph.get(start).get(neighbors[i]) * prodWeight
            }
        }
    }
    return -1
}