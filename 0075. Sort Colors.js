// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

//1) One Pass
//Time O(n)
//Space O(1)

var sortColors = function(nums) {
    let pivot = 1
    let l = 0
    let equal = 0
    let r = nums.length
    
    while (equal < r) {
        if (nums[equal] < pivot) {
            swap(equal, l)
            equal++
            l++
        } else if (nums[equal] === pivot) equal++
        else {
            r--
            swap(equal, r) 
        }
    }
    
    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
};

//2) Two Pass
var sortColors = function(nums) {
    let pivot = 1
    let l = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            let temp = nums[i]
            nums[i] = nums[l]
            nums[l] = temp
            l++
        }
    }
    
    let r = nums.length-1
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] < pivot) break
        else if (nums[i] > pivot) {
            let temp = nums[i]
            nums[i] = nums[r]
            nums[r] = temp
            r--
        }
    }
};