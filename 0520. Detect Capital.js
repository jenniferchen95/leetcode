// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
 
// Example 1:

// Input: "USA"
// Output: True
 

// Example 2:

// Input: "FlaG"
// Output: False
 
// Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.



//Time O(n)
//Space O(1)
var detectCapitalUse = function(word) {
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let count = 0
    
    for (let char of word) {
        if (lower.includes(char)) count++
    }
    
    return count === word.length || count === 0 || !lower.includes(word[0]) && count === word.length-1
};