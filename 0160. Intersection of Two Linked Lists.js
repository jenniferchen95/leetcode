// Write a program to find the node at which the intersection of two singly linked lists begins.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

//1) Constant space
//Time O(n+m)
//Space O(1)
var getIntersectionNode = function(headA, headB) {
    let Alen = getLength(headA)
    let Blen = getLength(headB)
    
    while (Alen > Blen) {
        Alen--
        headA = headA.next
    }
    
    while (Blen > Alen) {
        Blen--
        headB = headB.next
    }
    
    while (headA !== headB) {
        headA = headA.next
        headB = headB.next
    }
    
    return headA
    
    
    function getLength(head) {
        let len = 0
        while (head) {
            len++
            head = head.next
        }
        return len
    }
};

//2) Brute force - Utilizing extra space
//Time O(m+n)
//Space O(n or m)
var getIntersectionNode = function(headA, headB) {
    let map = new Set()
    
    while (headA) {
        if (!map.has(headA)) {
            map.add(headA)
        }
        headA = headA.next
    }
    
    while (headB) {
        if (map.has(headB)) return headB
        headB = headB.next
    }
    return null
};