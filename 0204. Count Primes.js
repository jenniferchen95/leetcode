// Count the number of prime numbers less than a non-negative number, n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
 

// Constraints:

// 0 <= n <= 5 * 106

//1) TLE 
//Time O(n^2)
//Space O(1)
var countPrimes = function(n) {
    let count = 0

    for (let i = 2; i < n; i++) {
        if (isPrime(i) === true) count++
    }
    return count

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num%i === 0) return false
        }
        return true
    }
};

//2) Sieve of Eratosthenes
//Time O(n log log n)
//Space O(n)

var countPrimes = function(n) {
    let primes = new Array(n).fill(true)
    primes[0] = false
    primes[1] = false
    
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (primes[i]) {
            for (let j = i*i; j < n; j+=i) {
                primes[j] = false
            }
        }
    }
    return primes.filter((val=>val)).length
};