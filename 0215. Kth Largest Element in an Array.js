// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

//Time O(n) on average, O(n^2) worst case
//Space O(1)
var findKthLargest = function(nums, k) {
    return quickSelect(0, nums.length-1)
    
    function quickSelect(startIdx, endIdx) {
        let pivotIdx = partition(startIdx, endIdx)
        if (k < nums.length - pivotIdx) {
            return quickSelect(pivotIdx + 1, endIdx)
        } else if (k > nums.length - pivotIdx) {
            return quickSelect(startIdx, pivotIdx-1)
        } else {
            return nums[pivotIdx]
        }
    }
    function partition(startIdx, endIdx) {
        if (startIdx >= endIdx) return startIdx;

        let pivotIdx = startIdx
        let leftIdx = startIdx + 1
        let rightIdx = endIdx
        
        while (leftIdx <= rightIdx) {
            if (nums[leftIdx] > nums[pivotIdx] && nums[rightIdx] < nums[pivotIdx]) {
                swap(leftIdx, rightIdx)
            }
            if (nums[leftIdx] <= nums[pivotIdx]) leftIdx++
            if (nums[rightIdx] >= nums[pivotIdx]) rightIdx--
        }
        swap(pivotIdx, rightIdx)
        return rightIdx
    }
        
    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
};