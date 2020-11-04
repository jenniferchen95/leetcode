// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105

//Time O(n)
//Space O(1)
var findUnsortedSubarray = function(nums) {
    if (nums.length === 1) return 0
    let l = 0
    let r = nums.length-1
    
    while (l < r) {
        if (nums[l] > nums[l+1] && nums[r] < nums[r-1]) break
        while (nums[l] <= nums[l+1]) l++
        while(nums[r] >= nums[r-1]) r--
    }
    
    let unsortedMin = Infinity
    let unsortedMax = -Infinity
    
    for (let i = l; i <= r; i++) {
        unsortedMin = Math.min(nums[i], unsortedMin)
        unsortedMax = Math.max(nums[i], unsortedMax)
    }
    
    if (unsortedMin !== Infinity || unsortedMax !== -Infinity) {
        while (nums[l] > unsortedMin) l--
        while (nums[r] < unsortedMax) r++
    }
    return (unsortedMin === Infinity && unsortedMax === -Infinity) ? 0 : r-l-1
    
};