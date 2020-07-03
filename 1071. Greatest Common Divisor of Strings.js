// For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

// Return the largest string X such that X divides str1 and X divides str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""


var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    else if (str1 === str2) return str1;
    else if (str1.length > str2.length) {
        return gcdOfStrings(str1.slice(str2.length), str2)
    } else {
        return gcdOfStrings(str2.slice(str1.length), str1)
    }
};