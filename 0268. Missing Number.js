// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

//1) Hash
//Time O(n)
//Space O(n)
var missingNumber = function(nums) {
    let hash = {}
    for (let num of nums) {
        hash[num] = hash[num] || 0
        hash[num]++
    }
    for (let i = 0; i < nums.length+1; i++) {
        if (hash[i] === undefined) return i
    }
};

//2 Gauss' Formula - Sum of 0 to n = n(n+1)/2
//Time O(n)
//Space O(1)
var missingNumber = function(nums) {
    let expectedSum = (nums.length*(nums.length+1))/2
    let actualSum = 0
    for (let num of nums) {
        actualSum += num
    }
    return expectedSum-actualSum
};