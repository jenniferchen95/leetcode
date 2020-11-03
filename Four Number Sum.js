function fourNumberSum(nums, target) {
    let hash = {}
    let res = []
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            let diff = target - sum
            if (diff in hash) {
                for (let pairs of hash[diff]) {
                    res.push(pairs.concat([nums[i], nums[j]]))
                }
            }
        }
        for (let k = 0; k < i; k++) {
            let sum = nums[k] + nums[i]
            hash[sum] = hash[sum] || []
            hash[sum].push([nums[k], nums[i]])
        }
    }
            
    return res
}