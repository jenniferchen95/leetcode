// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


//Time O(nlogn)
//Space O(1) or O(n)
//If we can sort intervals in place, we do not need more than constant additional space. Otherwise, we must allocate linear space to store a copy of intervals and sort that.

var merge = function(intervals) {
    if (!intervals.length) return []

    intervals = intervals.sort((a,b) => a[0] - b[0])
    
    let prev = intervals[0]
    let res = [prev]

    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(curr[1], prev[1])
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
}