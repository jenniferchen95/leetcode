//Time O(n)
//Space O(1)
var findMissingRanges = function(nums, lower, upper) {
    let res = []
    
    let start = lower
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < start) {
            continue
        }
        if (nums[i] === start) {
            start++
            continue
        }
        res.push(getRange(start, nums[i]-1))
        start = nums[i]+1
    }
    
    if (start <= upper) {
        res.push(getRange(start, upper))
    }
    
    return res
    
    function getRange(start, end) {
        return (start === end) ? start.toString() : start.toString() + "->" + end.toString()  
    }
};