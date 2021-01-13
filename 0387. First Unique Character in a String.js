// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 
// Note: You may assume the string contains only lowercase English letters.

//Time O(n)
//Space O(1) - max 26 chars, only lowercase 
var firstUniqChar = function(s) {
    let count = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if (!count.has(s[i])) {
            count.set(s[i], [1, i])
        } else {
            count.get(s[i])[0]++
        }
    }

    for (let key of count.keys()) {
        if (count.get(key)[0] === 1) return count.get(key)[1]
    }
    
    return -1
};