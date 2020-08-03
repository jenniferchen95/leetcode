// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
 
// Constraints:

// s consists only of printable ASCII characters.


//Time O(n)
//Space O(1)
var isPalindrome = function(s) {    
    let alpha = "abcdefghijklmnopqrstuvwxyz0123456789"
    s = s.toLowerCase()
    let left = 0
    let right = s.length-1
    
    while (left < right) {
        if (!alpha.includes(s[left])) {
            left++ 
            continue;
        } else if (!alpha.includes(s[right])) {
            right--
            continue
        } else if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
};