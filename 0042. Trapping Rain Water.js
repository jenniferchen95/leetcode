// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 
// Constraints:

// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105


//Time O(n)
//Space O(1)
var trap = function(heights) {
    let res = 0
    let l = 0
    let r = heights.length-1
    
    let leftMax = heights[l]
    let rightMax = heights[r]
    
    while (l < r) {
        if (heights[l] < heights[r]) {
            l++
            leftMax = Math.max(heights[l], leftMax)
            res += leftMax - heights[l]
        } else {
            r--
            rightMax = Math.max(heights[r], rightMax)
            res += rightMax - heights[r]
        }
    }
    return res
};