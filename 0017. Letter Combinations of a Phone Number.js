// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


//Time O(N*4^N) - No more than 4 possible combinations for each digit and n being the amount of digits provided as input 
                //O(n) time to copy string over to the answer list in each base case 
//Space O(4^N) - Recursion tree max n calls deep w/ max 4 choices at each digit

var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    
    let res = []
    
    function recurse(index, combo) {
        if (index === digits.length) {
            res.push(combo)
            return;
        } else {
            for (let char of map[digits[index]]) {
                recurse(index+1, combo+char)
            }
        }
    }
    recurse(0, "")
    return res
};