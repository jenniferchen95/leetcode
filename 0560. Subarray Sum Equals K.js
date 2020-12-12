Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

//Time O(n)
//Space O(n)
var subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0, 1)
    let res = 0
    let sum = 0
    
    for (let num of nums) {
        sum += num
        let diff = sum - k
        if (map.has(diff)) res += map.get(diff)
        if (map.has(sum)) map.set(sum, map.get(sum) + 1)
        else map.set(sum, 1)
    }
    return res
};