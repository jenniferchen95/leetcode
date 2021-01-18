//1) Iterative
//Time O(h)
//Space O(1)
var closestValue = function(root, target) {
    let closest = root.val
    
    while (root) {
        let diff = root.val - target
        if (Math.abs(diff) < Math.abs(closest-target)) closest = root.val
        if (diff > 0) root = root.left
        else root = root.right
    }
    
    return closest
};

//2) Recursive
//Time O(h)
//Space O(h)
var closestValue = function(root, target) {
    let closest = [root.val, root.val-target]
    search(root, target)
    return closest[0]

    function search(root, target) {
        if (!root) return
        let diff = root.val - target

        if (Math.abs(diff) < Math.abs(closest[1])) {
            closest = [root.val, diff]
        }
        if (diff > 0) {
            search(root.left, target)
        } else {
            search(root.right, target)
        }
    }
};