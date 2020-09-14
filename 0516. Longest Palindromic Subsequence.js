// Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input:

// "bbbab"
// Output:
// 4
// One possible longest palindromic subsequence is "bbbb".
 

// Example 2:
// Input:

// "cbbd"
// Output:
// 2
// One possible longest palindromic subsequence is "bb".

// Constraints:

// 1 <= s.length <= 1000
// s consists only of lowercase English letters.

//Dynamic Programming
//Time O(n^2)
//Space O(n^2)
var longestPalindromeSubseq = function(s) {
    let dp = new Array(s.length).fill([]).map(_ => new Array(s.length).fill(0))
    
    for (let i = s.length-1; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i+1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = 2 + dp[i+1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][s.length-1]
}