//Time O(m*n)
//Space O(m) - col size

var maxKilledEnemies = function(grid) {
    if (!grid.length) return 0
    let max = 0
    let colHits = new Array(grid[0].length).fill(0)
    let rowHits
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            
            if (j === 0 || grid[i][j-1] === "W") {
                rowHits = 0
                for (let k = j; k < grid[0].length; k++) {
                    if (grid[i][k] === "W") break
                    else if (grid[i][k] === "E") rowHits++
                }
            }
            
            if (i === 0 || grid[i-1][j] === "W") {
                colHits[j] = 0
                for (let k = i; k < grid.length; k++) {
                    if (grid[k][j] === "W") break
                    else if (grid[k][j] === "E") colHits[j]++
                }
            }
            
            if (grid[i][j] === "0") {
                max = Math.max(max, rowHits + colHits[j])
            }
        }
    }

    return max
};