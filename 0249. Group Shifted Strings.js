// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of non-empty strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

// Example:

// Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
// Output: 
// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]

//Time O(ab) - a being the total number of strings and b being the longest length string
//Space O(n) - n being gispace required for hash
var groupStrings = function(strings) {
    let res = []
    let hash = {}
    let alpha = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,    
        'l': 12,
        'm': 13,
        'n': 14, 
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25, 
        'z': 26
    }
    
    for (let string of strings) {
        let shift = getShift(string)
        if (hash[shift] !== undefined) {
            hash[shift].push(string)
        } else {
            hash[shift] = [string]
        }
    }
    
    
    function getShift(string) {
        if (string.length === 1) return 0
        let shift = []
        for (let i = 0; i < string.length-1; i++) {
            let diff = alpha[string[i+1]]-alpha[string[i]]
            if (diff < 0) diff += 26
            shift.push(diff)
        }
        return shift
    }
    
    
    for (let key in hash) {
        res.push(hash[key])
    }
    
    return res
};