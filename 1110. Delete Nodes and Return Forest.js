var delNodes = function(root, to_delete) {
    let set = new Set(to_delete)
    let res = []
    if (!set.has(root.val)) res.push(root)
    helper(root)
    return res
    
    function helper(root) {
        if (!root) return null
        root.left = helper(root.left)
        root.right = helper(root.right)
        
        if (set.has(root.val)) {
            if (root.left) res.push(root.left)
            if (root.right) res.push(root.right)
            return null
        }
        return root
    }
};