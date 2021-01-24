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

// Python with minHeap
// class Solution:
//     def minMeetingRooms(self, intervals: List[List[int]]) -> int:
//         if not intervals:
//             return 0
        
//         free_rooms = []
        
//         intervals.sort(key = lambda x: x[0])
        
//         heapq.heappush(free_rooms, intervals[0][1])
        
//         for i in intervals[1:]:
//             if i[0] < free_rooms[0]: 
//                 heapq.heappush(free_rooms, i[1])
//             else: 
//                 heapq.heappop(free_rooms)
//                 heapq.heappush(free_rooms, i[1])
        
//         return len(free_rooms)