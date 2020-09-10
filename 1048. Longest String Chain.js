// Given a list of words, each word consists of English lowercase letters.

// Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.  For example, "abc" is a predecessor of "abac".

// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

// Return the longest possible length of a word chain with words chosen from the given list of words.

// Example 1:

// Input: ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: one of the longest word chain is "a","ba","bda","bdca".
 
// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of English lowercase letters.


//Time Sorting O(nlog(n))
//     For loop O(NSS) where second S refers to string generation
//Space O(NS)
       

var longestStrChain = function(words) {
    words = words.sort((a,b) => a.length-b.length)
    let hash = {}
    let res = 0
    for (let word of words) {
        let longest = 0 
        for (let i = 0; i < word.length; i++) {
            let curr = word.slice(0,i) + word.slice(i+1)
            longest = Math.max(longest, (hash[curr] || 0)+1) 
        }
        hash[word] = longest
        res = Math.max(res, longest)
    }
    return res
};