// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// Example 1:

// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4


//BFS
//Time O(n*m) - size of grid
//Space O(n*m) - size of grid
var orangesRotting = function(grid) {
    if (!grid.length) return 0
    
    let queue = []
    let fresh = 0
    let minutes = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) fresh++
            else if (grid[i][j] === 2) {
                queue.push([i,j])
            }
        }
    }
    
    if (fresh === 0) return 0
    
    let dirs = [[0,-1], [0, 1], [-1, 0], [1, 0]]
    
    while (queue.length && fresh) {
        minutes++
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let curr = queue.shift()
            for (let dir of dirs) {
                let x = curr[0] + dir[0]
                let y = curr[1] + dir[1]
                if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 2 || grid[x][y] === 0) continue
                queue.push([x,y])
                grid[x][y] = 2
                fresh--
            }
        }
    }
    
    return fresh === 0 ? minutes : -1
};