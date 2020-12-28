//Time O(n)
//Space O(1)

var wiggleSort = function(nums) {
    let less = true
    
    for (let i = 0; i < nums.length-1; i++) {
        if (less) {
            if (nums[i] > nums[i+1]) {
                swap(i, i+1)
            }
        } else {
            if (nums[i] < nums[i+1]) {
                swap(i, i+1)
            }
        }
        less = !less
    }
    
    function swap(i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
};