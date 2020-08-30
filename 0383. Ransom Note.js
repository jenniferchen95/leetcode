Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

//Time O(m+n)
//Space O(1) - 26 chars in alphabet in hash at most
var canConstruct = function(ransomNote, magazine) {
    let hash = {}
    
    for (let letter of magazine) {
        hash[letter] = hash[letter] || 0
        hash[letter]++
    }
    
    for (let letter of ransomNote) {
        if (hash[letter] === undefined || hash[letter] <= 0) return false
        hash[letter]--
    }
    return true
};