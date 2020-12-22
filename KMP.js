//Time O(pattern length)
//Space O(pattern length)

var KMP = function(pattern) {
    let lps = new Array(pattern.length) 
    let i = 0
    let j = 1
    
    while (i < pattern.length && j < pattern.length) {
        if (pattern[i] === pattern[j]) {
            lps[j] = i + 1
            i++
            j++
        } else {
            if (i > 0) {
                i = lps[i-1]
            } else {
                lps[j] = i
                j++
            }
        }
    }
};