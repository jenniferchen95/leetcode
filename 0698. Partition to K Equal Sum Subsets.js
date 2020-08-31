// Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

 

// Example 1:

// Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// Output: True
// Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 

// Note:

// 1 <= k <= len(nums) <= 16.
// 0 < nums[i] < 10000.

//Backtracking
//Space O(n) - call stack
var canPartitionKSubsets = function(nums, k) {
    let sum = 0
    let visited = new Array(nums.length-1).fill(false)
    for (let num of nums) {
        sum += num
    }
    if (sum%k !== 0) return false
    return canPartition(nums, k, 0, 0, sum/k, visited)
};

function canPartition(nums, k, start, currSum, targetSum, visited) {
    if (k === 1) return true
    
    if (currSum === targetSum) {
        return canPartition(nums, k-1, 0, 0, targetSum, visited)
    }
    
    for (let i = start; i < nums.length; i++) {
        if (!visited[i] && currSum <= targetSum) {
            visited[i] = true
            if (canPartition(nums, k, i+1, currSum + nums[i], targetSum, visited)) {
                return true
            }
            visited[i] = false
        }
    }
    
    return false
}