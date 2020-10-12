// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

// Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


//Time O(n)
//Space O(n)
var longestConsecutive = function(nums) {
    if (!nums.length) return []
    let hash = {}
    let maxLen = 1
    
    for (let num of nums) {
        hash[num] = true
    }
    
    for (let num of nums) {
        let currLen = 1
        if (hash[num+1]) {
            let curr = num
            while (hash[curr+1]) {
                currLen++
                curr++
            }
        } else {
            currLen = 1
        }
        maxLen = Math.max(maxLen, currLen)
    }
    
    return maxLen
};