// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL


//1) Iterative
//Time O(n)
//Space O(1)
var reverseList = function(head) {
    let prev = null
    while (head) {
        let next = head.next;
        head.next = prev
        prev = head
        head = next
    }
    return prev
};

//2) Recursive
//Time O(n)
//Space O(n)
var reverseList = function(head) {
    if (head === null || head.next === null) return head
    
    let reversedHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return reversedHead
};
