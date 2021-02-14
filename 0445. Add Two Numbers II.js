var addTwoNumbers = function(l1, l2) {
    l1 = reverse(l1)
    l2 = reverse(l2)
    let dummy = new ListNode()
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
    
    return reverse(dummy.next)
    
    function reverse(head) {
        let prev = null
        while (head) {
            let next = head.next
            head.next = prev
            prev = head
            head = next
        }
        return prev
    }
};