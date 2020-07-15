//Time O(n) - # of nodes
//Space O(n) - # of nodes
var verticalOrder = function(root) {
    if (!root) return []
    let hash = {}
    let min = 0
    let max = 0
    let queue = [[root, 0]]
    
    while (queue.length) {
        let [node, level] = queue.shift();
        if (hash[level] === undefined) {
            hash[level] = [node.val]
        } else {
            hash[level].push(node.val)
        }
        
        if (node.left) {
            min = Math.min(min, level-1)
            queue.push([node.left, level-1])
        }
        
        if (node.right) {
            max = Math.max(max, level+1)
            queue.push([node.right, level+1])
        }
    }
    
    let res = []
    for (let i = min; i < max+1; i++) {
        res.push(hash[i])
    }
    return res
};