// Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

// Example 1:

// Input: A = [4,5,0,-2,-3,1], K = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by K = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 
// Note:

// 1 <= A.length <= 30000
// -10000 <= A[i] <= 10000
// 2 <= K <= 10000


//Time O(n)
//Space O(k)
var subarraysDivByK = function(A, K) {
    let map = {}
    map[0] = 1
    let sum = 0
    let count = 0
    
    for (let num of A) {
        sum = (num+sum)%K
        if (sum < 0) sum += K
        map[sum] = map[sum] || 0
        count += map[sum]
        map[sum]++
    }
    
    return count
};