// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

var isIsomorphic = function(s, t) {
    let hash = {}
    let visited = {}
    let str = ""
    
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined && !visited[t[i]]) {
            hash[s[i]] = t[i] 
            visited[t[i]] = true
        }  
    }
    
    for (let c of s) {
        str += hash[c]
    }
    return str === t
};