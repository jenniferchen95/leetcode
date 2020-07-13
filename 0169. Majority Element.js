// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

//Boyer-Moore Voting Algorithm
//Time O(n)
//Space O(1)

var majorityElement = function(nums) {
    let major = nums[0]
    let count = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === major) count++
        else if (count === 0) major = nums[i]
        else count--
    }
    return major
};