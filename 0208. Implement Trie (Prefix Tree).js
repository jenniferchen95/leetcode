// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.


var Trie = function() {
    this.root = {}
};

//Time O(m) - length of key
//Space O(m) - at most add m nodes
//Inserts a word into the trie. 
Trie.prototype.insert = function(word) {
    let node = this.root
    for (let c of word) {
        if (!node[c]) node[c] = {}
        node = node[c]
    }
    node.isEnd = true
};

Trie.prototype.traverse = function(word) {
    let node = this.root
    for (let c of word) {
        node = node[c]
        if (!node) return null
    }
    return node
}

//Time O(m)
//Space O(1)
//Returns if the word is in the trie. 
Trie.prototype.search = function(word) {
    let node = this.traverse(word) 
    return node != null && node.isEnd == true
};

//Time O(m)
//Space O(1)
//Returns if there is any word in the trie that starts with the given prefix. 
Trie.prototype.startsWith = function(prefix) {
    return this.traverse(prefix) != null
};
