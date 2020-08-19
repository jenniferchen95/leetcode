// You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

// What is the maximum number of envelopes can you Russian doll? (put one inside other)

// Note:
// Rotation is not allowed.

// Example:

// Input: [[5,4],[6,4],[6,7],[2,3]]
// Output: 3 
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

//Time O(nlogn)
//Space O(n)
var maxEnvelopes = function(envelopes) {
    if (!envelopes.length) return 0
    envelopes.sort((a,b) => a[0]-b[0] || b[1]-a[1])
    
    let dp = new Array(envelopes.length).fill(0)
    let len = 0
    
    for (let envelope of envelopes) {
        let l = 0, r = len-1
        while (l <= r) {
            let m = Math.floor(l + (r-l)/2) 
            if (envelope[1] > dp[m]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        dp[l] = envelope[1]
        if (l === len) len++
    }
    return len
};