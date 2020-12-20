// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

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