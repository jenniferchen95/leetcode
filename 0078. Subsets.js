// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

//DFS
//Time O(N*2^N)
//Space O(N*2^N)
var subsets = function(nums) {
    let res = []
    
    function helper(index, path) {
        res.push(path)
        for (let i = index; i < nums.length; i++) {
            helper(i+1, path.concat([nums[i]]))
        }
    }
    helper(0, [])
    return res
};


//Backtrack
//Time O(N*2^N)
//Space O(N*2^N)
var subsets = function(nums) {
    let res = []
    
    function backtrack(index, curr) {
        if (index === nums.length) {
            res.push(curr)
        } else {
            backtrack(index+1, curr.concat([nums[index]]))
            backtrack(index+1, curr)
        }
    }
    
    backtrack(0, [])
    return res
};