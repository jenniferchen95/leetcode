// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 
// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
// Example 4:

// Input: head = []
// Output: []
// Explanation: Given linked list is empty (null pointer), so return null.


//1) Using map
//Time O(n)
//Space O(n)
var copyRandomList = function(head) {
    let map = new Map();
    
    let curr = head
    while (curr) {
        map.set(curr, new Node(curr.val))
        curr = curr.next
    }
    curr = head
        
    while (curr) {
        map.get(curr).next = map.get(curr.next) || null
        map.get(curr).random = map.get(curr.random) || null
        curr = curr.next
    }
    
    return map.get(head)
};

//2) Using LL
//Time O(n)
//Space O(1)

var copyRandomList = function(head) {
    if (!head) return null
    
    let curr = head
    while (curr) {
        let newNode = new Node(curr.val)
        newNode.next = curr.next
        curr.next = newNode
        curr = newNode.next
    }
    curr = head
    while (curr) {
        curr.next.random = curr.random ? curr.random.next : null
        curr = curr.next.next
    }
    
    let oldList = head
    let newList = head.next
    let dummy = newList;
    
    while (oldList) {
        oldList.next = oldList.next.next
        newList.next = newList.next ? newList.next.next : null
        oldList = oldList.next
        newList = newList.next
    }
    return dummy
    
};