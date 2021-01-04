//Time O(n)
//Space O(1)
var isStrobogrammatic = function(num) {
    let hash = {
        "0": "0",
        "1": "1",
        "6": "9",
        "8": "8",
        "9": "6",
    }
    let l = 0
    let r = num.length-1
    
    while (l <= r) {
        if (hash[num[l]] === num[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
};