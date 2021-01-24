// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

//Time O(n)
//Space O(1)
var isPalindrome = function(head) {
    if (!head) return true
    let fast = head
    let slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    let prev = null
    while (slow) {
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }
    
    while (prev && head) {
        if (prev.val !== head.val) return false
        prev = prev.next
        head = head.next
    }
    
    return true
};