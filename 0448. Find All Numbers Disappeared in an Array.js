// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

//Time O(n)
//Space O(1) - Returned list does not count as extra space
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1
        if (nums[idx] > 0) {
            nums[idx] = -nums[idx]
        }
    }
    
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1)
    }
    return res
};