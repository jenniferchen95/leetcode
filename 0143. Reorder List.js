// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.


//Time O(n)
//Space O(1)
var reorderList = function(head) {
    if (!head) return;
    let reversedHalf = reverse(split(head))
    merge(head, reversedHalf)
    
    
    function split (head) {
        let slow = head
        let fast = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let l2 = slow.next
        slow.next = null;
        return l2
    }
    
    function reverse (head) {
        let prev = null
        while (head) {
            let next = head.next
            head.next = prev
            prev = head
            head = next;
        }
        return prev;
    }
    
    function merge(l1, l2) {
        while (l1 && l2) {
            let temp1 = l1.next
            l1.next = l2
            l1 = temp1

            let temp2 = l2.next
            l2.next = l1
            l2 = temp2
        }
    }
};