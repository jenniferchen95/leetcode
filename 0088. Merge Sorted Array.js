// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

//Time O(n + m) 
//Space O(1)
var merge = function(nums1, m, nums2, n) {
    let end = nums1.length-1
    let n1 = m-1
    let n2 = n-1
    
    while (n1 >= 0 && n2 >= 0) {
        if (nums1[n1] > nums2[n2]) {
            nums1[end] = nums1[n1]
            n1--
        } else {
            nums1[end] = nums2[n2]
            n2--
        }
        end--
    }
    
    for (let i = n2; i >= 0; i--) {
        nums1[i] = nums2[n2]
        n2--
    }
    
};