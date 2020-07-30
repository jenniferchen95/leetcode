// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


//Time O(n)
//Space O(1) 
var frequencySort = function(s) {

    let map = {}
    let bucket = new Array(s.length+1).fill().map(_=>[])
    let res = ""
    
    for (let c of s) {
        map[c] = map[c] || 0
        map[c]++
    }
    
    for (let key in map) {
        bucket[map[key]].push(key)
    }

    for (let i = s.length; i >= 0; i--) {
        if (bucket[i].length > 0) {
            for (let j = 0; j < bucket[i].length; j++) {
                let char = bucket[i][j]
                res += char.repeat(i)
            }
        }
    }
    
    return res
};