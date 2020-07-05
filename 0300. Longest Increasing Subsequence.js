// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

//1) DP
//Time O(n^2)
//Space O(n) 

var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0
    
    let dp = [] 
    dp[0] = 1
    let maxCount = 1
    
    for (let i = 1; i < nums.length; i++) {
        let currMax = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                currMax = Math.max(currMax, dp[j])
            }
        }
        dp[i] = currMax + 1
        maxCount = Math.max(maxCount, dp[i])
    }
    return maxCount
};

