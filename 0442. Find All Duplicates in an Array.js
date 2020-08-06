// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


//Time O(n)
//Space O(1)
var findDuplicates = function(nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i])
        if (nums[idx-1] < 0) res.push(idx)
        else nums[idx-1] = -nums[idx-1]
    }
    return res
   
};