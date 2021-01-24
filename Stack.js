//Implement stack using a LL
class Node {
    constructor(val) {
      this.val = val;
      this.next = null
    }
  }
  
  class Stack {
    constructor() {
      this.top = null
    }
  
    push(val) {
      let newNode = new Node(val)
      if (this.top) {
        let next = this.top
        this.top = newNode
        newNode.next = next
      } else {
        this.top = newNode
      }
    }
  
    peek() {
      if (this.top) {
        return this.top.val
      } else return null
    }
  
    pop() {
      if (this.top) {
        let top = this.top
        this.top = this.top.next
        return top.val
      } else return null
    }
  
    isEmpty() {
      return this.top === null
    }
  }