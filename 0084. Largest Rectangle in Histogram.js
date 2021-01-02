// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

//1) Brute force
//Time O(n^2)
//Space O(1)
var largestRectangleArea = function(heights) {
    if (!heights.length) return 0
    let max = 0
    
    for (let i = 0; i < heights.length; i++) {
        let min = Number.MAX_SAFE_INTEGER
        for (let j = i; j < heights.length; j++) {
            min = Math.min(min, heights[j])
            max = Math.max(max, min * (j-i+1))
        }
    }
    
    return max
};

//2) Stack
//Time O(n)
//Space O(n)
var largestRectangleArea = function(heights) {
    if (!heights.length) return 0
    let stack = [-1]
    heights.push(0)
    let max = 0
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length-1]] > heights[i]) {
            let height = heights[stack.pop()]
            let width = i-stack[stack.length-1]-1
            max = Math.max(max, height*width)
        }
        stack.push(i)
    }
    
    heights.pop()
    return max
    
};