// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

//1) Recursive
//Time O(n+m)
//Space O(n+m)
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    
    if (l1. val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

//2) Iterative
//Time O(n+m)
//Space O(1)

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode()
    let curr = dummy

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 || l2
    return dummy.next
};