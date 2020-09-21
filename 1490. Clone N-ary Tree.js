// Given a root of an N-ary tree, return a deep copy (clone) of the tree.

// Each node in the n-ary tree contains a val (int) and a list (List[Node]) of its children.

// class Node {
//     public int val;
//     public List<Node> children;
// }
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Follow up: Can your solution work for the graph problem?

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,null,3,2,4,null,5,6]

//1) DFS
//Time O(n)
//Space O(h)
var cloneTree = function(root) {
    return dfs(root)
    
    function dfs(root) {
        if (!root) return
        let clone = new Node(root.val)
        for (let child of root.children) {
            clone.children.push(dfs(child))
        }
        return clone
    }
};
