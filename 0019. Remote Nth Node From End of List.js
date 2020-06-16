// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

//1) Two Pass
//Time O(L) - makes two traversals of the list
//Space O(1)
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let length = 0
    let first = head

    while (first) {
        length++ 
        first = first.next
    }
    length-=n
    first = dummy

    while (length > 0) {
        length--
        first = first.next
    }

    first.next = first.next.next
    return dummy.next
};

//2) One Pass
//Time O(L) - One traversal
//Space O(1)
var removeNthFromEnd = function(head, n) {
   let dummy = new ListNode();
   dummy.next = head
   let first = dummy;
   let second = dummy;

   for (let i = 1; i <= n + 1; i++) {
       first = first.next
   }

   while (first) {
       first = first.next;
       second = second.next;
   }
   second.next = second.next.next
   return dummy.next
};
