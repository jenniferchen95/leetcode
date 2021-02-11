// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

//Time: Get/Put O(1)
//Space: O(capacity) - hashmap/dll
class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoubleLL { 
    constructor() {
        this.head = new Node()
        this.tail = new Node()
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    
    insertHead(node) {
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
    }
    
    removeNode(node) {
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
    }
    
    moveToHead(node) {
        this.removeNode(node)
        this.insertHead(node)
    }
    
    removeTail() {
        let tail = this.tail.prev
        this.removeNode(tail)
        return tail.key
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map();
    this.dll = new DoubleLL()
};

LRUCache.prototype.get = function(key) {
    let node = this.map.get(key)
    if (!node) return -1
    this.dll.moveToHead(node)
    return node.val
};

LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key)
    if (!node) {
        if (this.map.size >= this.capacity) {
            let tailKey = this.dll.removeTail()
            this.map.delete(tailKey)
        }
        let newNode = new Node(key, value)
        this.dll.insertHead(newNode)
        this.map.set(key, newNode)
    } else {
        node.val = value
        this.dll.moveToHead(node)
    }
};
