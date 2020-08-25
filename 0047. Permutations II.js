// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

//Time O(N*N!)
var permuteUnique = function(nums) {
    let res = []
    nums.sort((a,b) => a-b)
    
    function helper(nums, tempList) {
        if (!nums.length) res.push(tempList)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i-1]) continue
            let newNums = nums.slice(0, i).concat(nums.slice(i+1))
            helper(newNums, tempList.concat(nums[i]))
        }
    }
    
    helper(nums, [])
    return res
};