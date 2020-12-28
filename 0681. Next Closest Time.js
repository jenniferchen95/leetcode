//Time O(256) = O(1)
//Space O(1)

var nextClosestTime = function(time) {
    let arr = time.split(":").join("").split("")
    arr.sort()
    let res = time.split("")
    
    res[4] = findNext(res[4], '9')
    if (res[4] > time[4]) return res.join("")
    
    res[3] = findNext(res[3], '5')
    if (res[3] > time[3]) return res.join("")
    
    let limit = res[0] === '2' ? '3' : '9'
    res[1] = findNext(res[1], limit)
    if (res[1] > time[1]) return res.join("")
    
    res[0] = findNext(res[0], '2')
    if(res[0] > time[0]) return res.join("")

    return res.join("")
    
    function findNext(start, limit) {
        for (let i = 0; i < arr.length; i++) {
            if (start < arr[i] && arr[i] <= limit) return arr[i]
        }
        return arr[0]
    }
};