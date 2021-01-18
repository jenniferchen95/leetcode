// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Constraints:

// transactions.length <= 1000
// Each transactions[i] takes the form "{name},{time},{amount},{city}"
// Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
// Each {time} consist of digits, and represent an integer between 0 and 1000.
// Each {amount} consist of digits, and represent an integer between 0 and 2000.

//Time O(n^2)
//Space O(n)
var invalidTransactions = function(transactions) {
    let invalid = []
    let map = {}
    
    for (let transaction of transactions) {
        let [name, time, amount, city] = transaction.split(',')
        if (map[name] === undefined) {
            map[name] = [[time, city]]
        } else {
            map[name].push([time, city])
        }
    }
    
    for (let transaction of transactions) {
        if (isInvalid(map, transaction)) invalid.push(transaction)
    }
    return invalid
};

function isInvalid(map, transaction) {
    let [name, time, amount, city] = transaction.split(',')
    
    if (amount > 1000) return true
    
    for (let info of map[name]) {
        if (city !== info[1] && Math.abs(time-info[0]) <= 60) return true
    }
    
    return false
}