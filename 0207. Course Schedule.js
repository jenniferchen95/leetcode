// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.
 

// Constraints:

// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.
// 1 <= numCourses <= 10^5

//Time O(E+V)
//Space O(E+V)
var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    let indegree = new Array(numCourses).fill(0)
    let queue = []
    let order = []
    for (let [c, p] of prerequisites) {
        if (!graph.has(p)) {
            graph.set(p, [c])
        } else {
            graph.get(p).push(c)
        }
        indegree[c]++
    }
    
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length) {
        let curr = queue.shift()
        if (graph.has(curr)) {
            for (let c of graph.get(curr)) {
                indegree[c]--
                if (indegree[c] === 0) queue.push(c)
            }
        }
        order.push(curr)
    }
    return order.length === numCourses 
};