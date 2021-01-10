// Given an array A of integers, return the length of the longest arithmetic subsequence in A.

// Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

// Example 1:

// Input: A = [3,6,9,12]
// Output: 4
// Explanation: 
// The whole array is an arithmetic sequence with steps of length = 3.
// Example 2:

// Input: A = [9,4,7,2,10]
// Output: 3
// Explanation: 
// The longest arithmetic subsequence is [4,7,10].
// Example 3:

// Input: A = [20,1,15,3,10,5,8]
// Output: 4
// Explanation: 
// The longest arithmetic subsequence is [20,15,10,5].
 
// Constraints:

// 2 <= A.length <= 1000
// 0 <= A[i] <= 500

//Time O(n^2)
//Space O(n^2)
var longestArithSeqLength = function(A) {
    let dp = new Array(A.length).fill(0)
    let max = 2
    
    for (let i = 0; i < A.length; i++) {
        dp[i] = new Map()
        for (let j = 0; j < i; j++) {
            let diff = A[i] - A[j]
            dp[i].set(diff, (dp[j].get(diff) || 1) + 1)
            max = Math.max(max, dp[i].get(diff))
        }
    }

    return max
};