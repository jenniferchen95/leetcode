// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// Example 1:

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
// Explanation:
 
// Constraints:

// The number of Nodes will not exceed 1000.
// 1 <= Node.val <= 105

//1) DFS w/ stack
var flatten = function(head) {
    if (!head) return null
    let dummy = new Node(0, null, head, null)
    let stack = [head]
    let prev = dummy
    
    while (stack.length) {
        let curr = stack.pop()
        prev.next = curr
        curr.prev = prev
        
        if (curr.next) {
            stack.push(curr.next)
            curr.next = null
        }
        if (curr.child) {
            stack.push(curr.child)
            curr.child = null
        }
        prev = curr
    }
    dummy.next.prev = null
    return dummy.next
};

//2) DFS w/ recursion
var flatten = function(head) {
    if (!head) return null
    let dummy = new Node(0, null, head, null)
    dfs(dummy, head)
    dummy.next.prev = null
    return dummy.next
    
    function dfs(prev, curr) {
        if (!curr) return prev
        curr.prev = prev
        prev.next = curr
        
        let temp = curr.next
        let tail = dfs(curr, curr.child)
        curr.child = null
        
        return dfs(tail, temp)
    }
};

//3) Using pointers
var flatten = function(head) {
    if (!head) return null
    let curr = head
    
    while (curr) {
        if (!curr.child) {
            curr = curr.next
            continue
        }
        let temp = curr.child
        while (temp.next) {
            temp = temp.next
        }
        temp.next = curr.next
        if (curr.next) curr.next.prev = temp
        curr.next = curr.child
        curr.child.prev = curr
        curr.child = null
    }
    return head
};

