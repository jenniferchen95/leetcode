// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//Time O(n)
//Space O(1)
var maxSubArray = function(nums) {
    let currSum = Number.MIN_SAFE_INTEGER;
    let maxSum = Number.MIN_SAFE_INTEGER;
    
    for (let num of nums) {
        currSum = Math.max(num, currSum += num)
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
};