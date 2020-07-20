// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Note:
// Both the string's length and k will not exceed 104.

// Example 1:

// Input:
// s = "ABAB", k = 2

// Output:
// 4

// Explanation:
// Replace the two 'A's with two 'B's or vice versa.
 

// Example 2:

// Input:
// s = "AABABBA", k = 1

// Output:
// 4

// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

//Time O(n)
//Space O(1)
var characterReplacement = function(s, k) {
    let dict = {}
    let start = 0
    let maxCount = 0
    let maxLength = 0
    
    for (let end = 0; end < s.length; end++) {
        dict[s[end]] = dict[s[end]] || 0
        dict[s[end]]++
        
        maxCount = Math.max(maxCount, dict[s[end]])
        
        if (end-start+1 - maxCount > k) {
            dict[s[start]]--
            start++
        }
        maxLength = Math.max(maxLength, end-start+1)
    }
    return maxLength
};