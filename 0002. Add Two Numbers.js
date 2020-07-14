// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

//Time O(max(m,n)) - m and n represents length of l1 and l2
//Space O(max(m,n)) - New list length at most max(m,n) + 1
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let curr = dummy
    let sum = 0
    let carry = 0
    
    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            carry = 1
            sum -= 10
        }
        curr.next = new ListNode(sum) 
        curr = curr.next
        
        sum = carry
        carry = 0
    }
    return dummy.next
};