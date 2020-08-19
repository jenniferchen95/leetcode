//Two Pointer
var minWindow = function(S, T) {
    let sIdx = 0
    let tIdx = 0 
    let len = S.length
    let start = -1
    while (sIdx < S.length) {
        if (S[sIdx] === T[tIdx]) {
            tIdx++
            if (tIdx === T.length) {
                let end = sIdx + 1
                tIdx--
                while (tIdx >= 0) {
                    if (S[sIdx] === T[tIdx]) {
                        tIdx--
                    }
                    sIdx--
                }
                tIdx++
                sIdx++
                if (end - sIdx < len) {
                    len = end - sIdx
                    start = sIdx
                }
            }
        }
        sIdx++  
    }
    
    return start !== -1 ? S.substring(start, start+len) : ""
};