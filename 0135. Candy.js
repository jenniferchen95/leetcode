// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.


//Time O(n) - Two pass, where n is length of input array
//Space O(n) 
var candy = function(ratings) {
    let dp = ratings.map(_=>1)
    
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) {
            dp[i] = dp[i-1] + 1
        }
    }

    for (let i = ratings.length-1; i >= 0; i--) {
        if (ratings[i-1] > ratings[i]) {
            dp[i-1] = Math.max(dp[i-1], dp[i]+1)
        }
    }

    return dp.reduce((a,b) => a+b)
};