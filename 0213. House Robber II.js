// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
//              because they are adjacent houses.
// Example 2:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.

//Time O(n)
//Space O(1)

var rob = function(nums) {
    let n = nums.length
    if (n === 1) return nums[0]
    if (!n) return 0
    return Math.max(robber(nums, 0, n-2), robber(nums, 1, n-1))
                    
    function robber (nums, j, k) {
        let currMax = 0
        let prevMax = 0 
        
        for (let i = j; i <= k; i++) {
            let temp = currMax 
            currMax = Math.max(currMax, nums[i] + prevMax)
            prevMax = temp
        }
        return currMax
    }
};

