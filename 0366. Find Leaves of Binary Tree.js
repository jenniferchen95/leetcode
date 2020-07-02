//Time O(n)
//Space O(n)
var findLeaves = function(root) {
    let res = []
    findLeavesHelper(root, res) 
    return res
};

function findLeavesHelper(root, res) {
    if (!root) return -1
    let level = Math.max(findLeavesHelper(root.left, res), findLeavesHelper(root.right, res)) + 1
    if (level === res.length) res.push([])
    res[level].push(root.val)
    return level
}