// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


//1) DP
//Time O(n)
//Space O(n)
var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1
    dp[1] = s[0] === '0' ? 0 : 1
    
    for (let i = 2; i < s.length+1; i++) {
        let twoDigit = parseInt(s.substring(i-2, i))
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i-2]
        } 
        if (s[i-1] !== '0') {
            dp[i] += dp[i-1]
        }
    }

    return dp[s.length]
};

//2) Recursion with memoization
//Time O(n)
//Space O(n)

var numDecodings = function(s) {
    let memo = {}
    return recursiveWithMemo(0, s)
    
    function recursiveWithMemo(index, s) {
        if (index === s.length) return 1
        if (s[index] === '0') return 0
        if (index === s.length-1) return 1
        
        if (index in memo) {
            return memo[index]
        }
        
        let ans = recursiveWithMemo(index+1, s) 
        if (parseInt(s.substring(index, index+2)) <= 26) {
            ans += recursiveWithMemo(index+2, s)
        }
        
        memo[index] = ans
        return ans
    }
};