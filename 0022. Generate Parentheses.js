Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

var generateParenthesis = function(n) {
    let res = []
    
    function helper(open, close, tempStr) {
        if (open === n && close === n) {
            res.push(tempStr)
            return;
        }
        
        if (open < n) {
            helper(open+1, close, tempStr+"(")
        }
        
        if (close < open) {
            helper(open, close+1, tempStr+")")
        }
    }
    
    helper(0, 0, "")
    return res
};