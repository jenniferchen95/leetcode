// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""
// Note:

// S will consist of lowercase letters and have length in range [1, 500].

//Sorting
//Time O(n) -> Since alphabet is fixed at 26 characters sorting is O(1)
//Space O(1) -> Same as above
var reorganizeString = function(s) {
    let hash = {}
    for (let c of s) {
        hash[c] = hash[c]+1 || 1
    }
    
    let sort = Object.keys(hash).sort((a,b) => hash[b]-hash[a]) 
    let index = 0
    let res = []
    
    for (let i = 0; i < sort.length; i++) {
        let occurrence = hash[sort[i]]
        if (occurrence > (s.length+1)/2) return ""
        for (let j = 0; j < occurrence; j++) {
            if (index >= s.length) index = 1
            res[index] = sort[i]
            index += 2
        }
    }
    
    return res.join("")
};