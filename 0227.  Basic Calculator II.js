// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:

// Input: "3+2*2"
// Output: 7
// Example 2:

// Input: " 3/2 "
// Output: 1
// Example 3:

// Input: " 3+5 / 2 "
// Output: 5
// Note:

// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.

//Time O(n)
//Space O(n)
var calculate = function(s) {
    
    let stack = []
    let num = 0
    let prevSign = '+'
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i]) && s[i] !== " ") {
            num = num*10 + Number(s[i]) - '0'
        }  
        if (isNaN(s[i]) || i === s.length-1) {
            if (prevSign === "+") {
                stack.push(num)
            } else if (prevSign === "-") {
                stack.push(-num)
            } else if (prevSign === "*") {
                let prevNum = stack.pop()
                stack.push(prevNum*num)
            } else if (prevSign === "/") {
                let prevNum = stack.pop()
                stack.push(Math.trunc(prevNum/num))
            }
            num = 0
            prevSign = s[i]
        }
    }
    return stack.reduce((a,b) => a+b)
};