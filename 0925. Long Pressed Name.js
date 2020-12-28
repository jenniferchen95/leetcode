var isLongPressedName = function(name, typed) {
    let i = 0
    let j = 0
    while (j < typed.length) {
        if (name[i] === typed[j]) {
            i++
            j++
        } else if (name[i] !== typed[j] && j > 0 && typed[j] === typed[j-1]) {
            while (typed[j] === typed[j-1]) j++
        } else {
            return false
        }
    }
    return i >= name.length && j === typed.length
};