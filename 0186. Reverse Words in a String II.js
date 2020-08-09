//Time O(n)
//Space O(1)

var reverseWords = function(s) {
    function reverse(s, l, r) {
        while (l < r) {
            swap(l, r) 
            l++
            r--
        }
    }
    
    function swap(i, j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    
    function reverseEachWord(s) {
        let start = 0
        let end = 0
        
        while (end < s.length) {
            while (end < s.length && s[end] !== " ") end++
            reverse(s, start, end-1)
            start = end+1
            end++
        }
    }
    
    reverse(s, 0, s.length-1)
    reverseEachWord(s)
    
};