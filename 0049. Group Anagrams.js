// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.


//Time O(N*K*logK) - N is length of strs and KlogK for sorting
//Space O(N*K) - content stored in mapping
var groupAnagrams = function(strs) {
    let mapping = {}

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]
        let sortedStr = str.split("").sort().join("");
        
        if (mapping[sortedStr] === undefined) {
            mapping[sortedStr] = [str]
        } else {
            mapping[sortedStr].push(str)
        }
    }
    return Object.values(mapping)
};