//1) Two Pointer
//Time O(nlogn)
//Space O(n)

//The sort method returns the original array, so if we do not use slice or concat, the latter ends assignment statement would have mutated the original array. 

var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0
    let start = intervals.slice().sort((a,b) => a[0]-b[0] )
    let end = intervals.sort((a,b) => a[1]-b[1])
    
    let rooms = 0
    let endPtr = 0

    for (let i = 0; i < start.length; i++) {
        if (start[i][0] < end[endPtr][1]) rooms++
        else endPtr++
    }
    
    return rooms
};
