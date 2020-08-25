// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

//Time O(N*2^N)
//Space O(N*2^N)
var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a,b) => a-b)
    function helper(nums, idx, tempList) {
        res.push(tempList)
        for (let i = idx; i < nums.length; i++) {
            if (i > idx && nums[i] === nums[i-1]) continue
            helper(nums, i+1, tempList.concat(nums[i]))
        }
    }
    helper(nums, 0, [])
    return res
};