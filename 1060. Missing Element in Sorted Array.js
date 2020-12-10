//Time O(logN)
//Space O(1)
var missingElement = function(nums, k) {
    let l = 0
    let r = nums.length-1
    
    while (l < r) {
        let m = Math.floor(l + (r-l)/2)
        let numMissed = nums[m] - nums[0] - m
        if (numMissed < k) l = m + 1
        else r = m - 1
    }
    let totalMissed = nums[l] - nums[0] - l
    if (totalMissed >= k) return nums[l] - 1 - (totalMissed-k)
    else return nums[l] + (k - totalMissed)
};