// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

//Time O(n^2)
//Space O(1)

var countSubstrings = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        expandCenter(i, i)
        expandCenter(i, i+1)
    }
    
    function expandCenter(i, j) {
        while (i >= 0 && j >= 0 && j < s.length && s[i] === s[j]) {
            count++
            i--
            j++
        }
    }
    return count
};