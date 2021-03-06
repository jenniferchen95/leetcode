// Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

// Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

// A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

// For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
// Example 1:

// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(15, 25); // returns false
// MyCalendar.book(20, 30); // returns true
// Explanation: 
// The first event can be booked.  The second can't because time 15 is already booked by another event.
// The third event can be booked, as the first event takes every time less than 20, but not including 20.
 

// Note:

// The number of calls to MyCalendar.book per test case will be at most 1000.
// In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

//Time O(n^2) - Using splice, can be nLogN using TreeMap
//Space O(n)
var MyCalendar = function() {
    this.bookings = []
};

MyCalendar.prototype.book = function(start, end) {
    let l = 0
    let r = this.bookings.length-1
    
    while (l <= r) {
        let m = Math.floor(l + (r-l)/2)
        let [s,e] = this.bookings[m]
        if (start >= e || end <= s) {
            if (start >= e) l = m + 1
            else r = m -1
        } else {
            return false
        }
    }
    this.bookings.splice(l, 0, [start,end])
    return true
};