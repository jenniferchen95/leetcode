//Time O(n)
//Space O(d)

var splitBST = function(root, V) {
    if (!root) return [null, null]
    
    if (root.val > V) {
        let [left, right] = splitBST(root.left, V)
        root.left = right 
        return [left, root]
    } else {
        let [left, right] = splitBST(root.right, V)
        root.right = left
        return [root, right]
    }
};