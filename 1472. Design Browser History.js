// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

//1) Two stacks
//Time O(1) - push/pop operations
//Space O(n) - n being most urls we are saving in forward/back
var BrowserHistory = function(homepage) {
    this.backArr = [homepage]
    this.forwardArr = []
};

BrowserHistory.prototype.visit = function(url) {
    this.backArr.push(url)
    this.forwardArr = []
};

BrowserHistory.prototype.back = function(steps) {
    while (steps > 0 && this.backArr.length > 1) {
        this.forwardArr.push(this.backArr.pop())
        steps--
    }
    return this.backArr[this.backArr.length-1]
};

BrowserHistory.prototype.forward = function(steps) {
    while (steps > 0 && this.forwardArr.length) {
        this.backArr.push(this.forwardArr.pop())
        steps--
    }
    return this.backArr[this.backArr.length-1]
};

//2) DLL
class Node {
    constructor(url) {
        this.url = url
        this.prev = null;
        this.next = null;
    }
}

var BrowserHistory = function(homepage) {
    this.curr = new Node(homepage)
};

BrowserHistory.prototype.visit = function(url) {
    let newNode = new Node(url)
    this.curr.next = newNode
    newNode.prev = this.curr
    this.curr = this.curr.next
};

BrowserHistory.prototype.back = function(steps) {
    while (this.curr.prev !== null && steps-- > 0) {
        this.curr = this.curr.prev
    }
    return this.curr.url
};

BrowserHistory.prototype.forward = function(steps) {
    while (this.curr.next !== null && steps-- > 0) {
        this.curr = this.curr.next
    }
    return this.curr.url
};