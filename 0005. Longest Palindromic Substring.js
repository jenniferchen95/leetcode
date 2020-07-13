// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

//Time O(n^2) - since every expansion can take n time 
//Space O(1)
var longestPalindrome = function(s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        let odd = expandCenter(i, i)
        if (odd.length > res.length) res = odd
        
        let even = expandCenter(i, i+1) 
        if (even.length > res.length) res = even
    }
    
    function expandCenter(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        return s.substring(l+1, r)
    }
    
    return res
};