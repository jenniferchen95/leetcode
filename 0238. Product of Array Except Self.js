// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)



//Time O(n) - # of elements in input array
//Space O(1) - Do not use any additional arrays and res array does not count towards it
var productExceptSelf = function(nums) {
    let res = []
    let leftProd = 1 
    let rightProd = 1

    for (let i = 0; i < nums.length; i++) {
        res[i] = leftProd;
        leftProd *= nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= rightProd;
        rightProd *= nums[i]
    }
    return res;
}