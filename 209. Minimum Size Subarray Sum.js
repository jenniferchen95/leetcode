// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 
// Accepted


//Time O(n)
//Space O(1)
var minSubArrayLen = function(s, nums) {
    if (!nums.length) return 0
    let sum = 0
    let len = Number.MAX_SAFE_INTEGER
    let l = 0
    let r = 0
    
    while (r < nums.length) {
        sum += nums[r]
        r++
        while (sum >= s) {
            len = Math.min(len, r-l)
            sum -= nums[l]
            l++
        }
    }   
    
    return len === Number.MAX_SAFE_INTEGER ? 0 : len
};