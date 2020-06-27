// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
// Accepted

//1) Recursion with Memoization
//Time O(n^2)
//Space O(n)
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict)
    return verifyWord(s, set, 0, {}) 
 }
 
 function verifyWord(s, set, start, memo) {
     if (s.length === start) return true;
     if (memo[start] !== undefined) return memo[start]
     
     for (let end = start + 1; end <= s.length; end++) {
         if (set.has(s.substring(start,end)) && verifyWord(s, set, end, memo)) {
             return memo[start] = true
         }
     }
     return memo[start] = false
 }

 //2) BFS
 //Time O(n^2)
 //Space O(n)
 var wordBreak = function(s, wordDict) {
    let dict = new Set(wordDict)
    let visited = new Set();
    let queue = [0]
    
    while (queue.length > 0) {
        let start = queue.shift();
        
        if (!visited.has(start)) {
            for (let end = start + 1; end <= s.length; end++) {      
                if (dict.has(s.slice(start,end))) {
                    if (s.length === end) return true
                    queue.push(end)
                }
            }
            visited.add(start)
        }
    }
    return false
}

//3) DP
//Time O(n^2)
//Space O(n)

var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] === true && wordDict.includes(s.substring(j,i))) 
            dp[i] = true;
            break;
        }
    }
    return dp[s.length]
}
