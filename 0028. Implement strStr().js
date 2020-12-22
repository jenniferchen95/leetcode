// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0
 
// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

//KMP
//Time O(m+n)
//Space O(m) - len of needle
var strStr = function(haystack, needle) {
    if (!haystack.length && !needle.length) return 0
    if (!needle.length) return 0
    if (!haystack.length || !needle.length || needle.length > haystack.length) return -1
    
    let lps = new Array(needle.length).fill(0)
    let i = 0
    let j = 1
    
    while (j < needle.length) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1
            i++
            j++
        } else {
            if (i > 0) {
                i = lps[i-1]
            } else {
                lps[j] = i
                j++
            }
        }
    }
    i = 0
    j = 0
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i++
            j++
        } else {
            if (j > 0) {
                j = lps[j-1]
            } else {
                i++
            }
        }
    }

    return j === needle.length ? i - j : -1
};