// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

//1) Not constant space 
//Time O(nlogn) -> Merge sort
//Space O(logn) -> Max depth of call stack
var sortList = function(head) {
    if (!head || !head.next) return head
    let slow = head
    let fast = head
    let prev = null
    
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    
    prev.next = null

    return merge(sortList(head), sortList(slow))
    
    function merge(l1, l2) {
        let dummy = new ListNode()
        let curr = dummy 
        
        while (l1 && l2) {
            if (l1.val < l2.val) {
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
    }
};