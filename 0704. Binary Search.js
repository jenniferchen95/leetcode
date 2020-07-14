// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

//Time O(logn)
//Space O(1)

var search = function(nums, target) {
    return searchHelper(0, nums.length-1)
    
    function searchHelper(left, right) {
        while (left <= right) {
            let mid = Math.floor((left+right)/2)
            if (target === nums[mid]) return mid
            else if (target < nums[mid]) {
                right = mid-1
            } else {
                left = mid+1
            }
        }
        return -1
    }
};