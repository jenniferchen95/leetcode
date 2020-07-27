// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.


//Bucket Sort
//Time O(n)
//Space O(n)

var topKFrequent = function(nums, k) {
    let map = {}
    let res = []
    let bucket = Array(nums.length+1).fill().map(_=>[])

    for (let num of nums) {
        map[num] = map[num] || 0
        map[num]++
    }
    
    for (let key in map) {
        bucket[map[key]].push(parseInt(key))
    }

    for (let i = nums.length; i >= 0; i--) {
        if (bucket[i].length !== 0) {
            for (let j = 0; j < bucket[i].length; j++) {
                if (res.length === k) return res
                res.push(bucket[i][j])
            }
        }
    }
};
