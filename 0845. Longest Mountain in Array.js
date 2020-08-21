// Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

// B.length >= 3
// There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// (Note that B could be any subarray of A, including the entire array A.)

// Given an array A of integers, return the length of the longest mountain. 

// Return 0 if there is no mountain.

// Example 1:

// Input: [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
// Example 2:

// Input: [2,2,2]
// Output: 0
// Explanation: There is no mountain.
// Note:

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000
// Follow up:

// Can you solve it using only one pass?
// Can you solve it in O(1) space?

//1) One pass




//2) Suboptimal 
//Time O(n^2)
//Space O(1)
var longestMountain = function(array) {
	let maxLen = 0
	
	for (let i = 0; i < array.length; i++) {
		expandCenter(i, i)
	}

	function expandCenter(i, j) {
		let prevI = array[i]
		let decrI = false
		while (i-1 >= 0) {
			if (array[i-1] < prevI) {
				prevI = array[i-1]
				i--
				decrI = true
			} else {
				break
			}
		}
		let prevJ = array[j]
		let decrJ = false
		while (j+1 < array.length) {
			if (array[j+1] < prevJ) {
				prevJ = array[j+1]
				j++
				decrJ = true
			} else {
				break
			}
		}
		if (decrI && decrJ) {
			maxLen = Math.max(maxLen, j+1-i)
		}
	}
	return maxLen >= 3 ? maxLen : 0
};