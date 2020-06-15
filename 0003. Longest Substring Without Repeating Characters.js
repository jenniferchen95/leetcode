// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


//1) Sliding Window
//Time O(2n) = O(n) - worst case, each character visited twice by i and j
//Space O(min(m,n)) - O(k) space for the sliding window, where k is the size of the Set

var lengthOfLongestSubstring = function(s) {
    let hashSet = new Set();
    let i = 0;
    let j = 0;
    let maxLen = 0;

    while (j < s.length) {
        if (!hashSet.has(s[j])) {
            hashSet.add(s[j])
            j++
            maxLen = Math.max(maxLen, j-i)
        } else {
            hashSet.delete(s[i])
            i++
        }
    }
    return maxLen
};