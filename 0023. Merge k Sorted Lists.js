// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

//1) Divide and Conquer
//Time O(N*logK) K = number of LL
//We can merge two sorted LL in O(n)
//Space O(1)
var mergeKLists = function(lists) {
    if (!lists.length) return null
    let interval = 1
    
    while (interval < lists.length) {
        for (let i = 0; i + interval < lists.length; i = i + interval*2) {
            lists[i] = mergeLists(lists[i], lists[i+interval])
        }
        interval *= 2
    }
    return lists[0]
    
    function mergeLists(l1, l2) {
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

//2) Merge lists one by one
//Time O(k*N)
//Space O(1)
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    while (lists.length > 1) {
        let l1 = lists.shift();
        let l2 = lists.shift();
        const mergedList = mergeLists(l1, l2)
        lists.push(mergedList)
    }
    return lists[0]
};

function mergeLists(l1, l2) {
    let dummy = new ListNode()
    let curr = dummy;
    
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