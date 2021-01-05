// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

//Time O(n)
//Space O(1)
var removeElements = function(head, val) {
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy
    
    while (curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return dummy.next
};