// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

//Time O(n)
//Space O(1)
var validPalindrome = function(s) {
    let l = 0
    let r = s.length-1

    while (l < r) {
        if (s[l] !== s[r]) {
            return palindrome(l+1, r) || palindrome(l, r-1)
        }
        l++
        r--
    }
    return true

    function palindrome(lo, hi) {
        let l = lo
        let r = hi
        
        while (l < r) {
            if (s[l] !== s[r]) return false
            l++
            r--
        }
        return true
    }
};