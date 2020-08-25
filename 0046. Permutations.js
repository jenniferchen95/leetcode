// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

//Time O(N*N!) - N! permutations and O(N) time to store each one 
var permute = function(nums) {
    let res = []
    
    function helper(nums, tempList) {
        if (nums.length === 0) res.push(tempList)
        
        for (let i = 0; i < nums.length; i++) {
            let newNums = nums.slice(0, i).concat(nums.slice(i+1))
            helper(newNums, tempList.concat(nums[i]))
        }
    }
    helper(nums, [])
    return res
};