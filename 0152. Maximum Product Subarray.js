// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


//Time O(n)
//Space O(1)
var maxProduct = function(nums) {
    let currMax = 1;
    let currMin = 1;
    let maxProd = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let prevMax = currMax;

        currMax = Math.max(prevMax * nums[i], nums[i], currMin * nums[i])
        currMin = Math.min(prevMax * nums[i], nums[i], currMin * nums[i])

        maxProd = Math.max(currMax, maxProd)
    }
    return maxProd
};