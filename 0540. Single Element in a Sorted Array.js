// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Follow up: Your solution should run in O(log n) time and O(1) space.

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

//Time O(logn)
//Space O(1)
var singleNonDuplicate = function(nums) {
    return helper(0, nums.length-1)
    
    function helper(left, right) {
        while (left <= right) {
            let mid = Math.floor(left + (right-left)/2)
            if (nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) return nums[mid]
            else {
                if ((mid%2 === 0 && nums[mid] === nums[mid+1]) ||
                    (mid%2 !== 0 && nums[mid] === nums[mid-1])) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }
    }
};