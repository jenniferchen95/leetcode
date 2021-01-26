// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

//Time O(max(n,m)) n and m being length of num1 or num2
//Space O(max(n,m))
var addStrings = function(num1, num2) {
    let sum = ''
    let carry = 0
    
    for (let i = num1.length-1, j = num2.length-1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        let x = i < 0 ? 0 : num1.charAt(i) - '0'
        let y = j < 0 ? 0 : num2.charAt(j) - '0'
        let currSum = x + y + carry
        carry = Math.floor(currSum/10)
        sum += currSum%10
    }
    
    return sum.split("").reverse("").join("")
};