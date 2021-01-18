// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

//Time O(n)
//Space O(1) - max 26 chars in map
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    let map = {}
    
    for (let c of s) {
        map[c] = (map[c] || 0) + 1
    }
    
    for (let c of t) {
        if (!map[c] || map[c] <= 0) return false
        map[c]--    
    }
    
    return true 
};