// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true
 

// Constraints:

// 0 <= s1.length, s2.length <= 100
// 0 <= s3.length <= 200
// s1, s2, and s3 consist of lower-case English letters.

//1) Recursion
//Time O(2^(n+m))
//Space O(n+m)

var isInterleave = function(one, two, three) {
    if (three.length !== one.length + two.length) return false
    return helper(one, two, three, 0, 0)
}

function helper(one, two, three, p1, p2) {
	let p3 = p1 + p2
	if (three.length === p3) return true
	
	if (p1 < one.length && one[p1] === three[p3]) {
		if (helper(one, two, three, p1+1, p2)) return true
	}
	
	if (p2 < two.length && two[p2] === three[p3]) {
		return helper(one, two, three, p1, p2+1)
	}
	return false
}

//2) Memoization
//Time O(n*m)
//Space O(n*m)
var isInterleave = function(s1, s2, s3) {
    if (s3.length !== s1.length + s2.length) return false
    
    let cache = new Array(s1.length+1).fill(0).map(_=> new Array(s2.length+1).fill(null))
    return helper(s1, s2, s3, 0, 0, cache)
    
    function helper(s1, s2, s3, p1, p2, cache) {
        if (cache[p1][p2]) return cache[p1][p2]
        let p3 = p1 + p2
        if (p3 === s3.length) return true
        
        if (p1 < s1.length && s1[p1] === s3[p3]) {
            cache[p1][p2] = helper(s1, s2, s3, p1+1, p2, cache)
            if (cache[p1][p2]) return true
        }
        
        if (p2 < s2.length && s2[p2] === s3[p3]) {
            cache[p1][p2] = helper(s1, s2, s3, p1, p2+1, cache)
            return cache[p1][p2]
        }
        return false
    }
};