// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

//1) DFS
//Time O(N+E)
//Space O(N)
var cloneGraph = function(node) {
    let visited = new Map();
    return dfs(node)
    
    function dfs(node) {
        if (!node) return node
        if (visited.has(node)) return visited.get(node)
        let newNode = new Node(node.val)
        visited.set(node, newNode)
        
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor))
        }
        
        return newNode
    }
};

//2) BFS
var cloneGraph = function(node) {
    if (!node) return node
    let map = new Map();
    let queue = [node]
    map.set(node, new Node(node.val))
    
    while (queue.length) {
        let curr = queue.shift()
        
        for (let neighbor of curr.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor)
            }
            map.get(curr).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(node)
};