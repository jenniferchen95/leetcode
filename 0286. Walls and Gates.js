//BFS
//Time O(m*n)
//Space O(m*n)
var wallsAndGates = function(rooms) {
    let queue = []
    
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) queue.push([i,j])
        }
    }
    
    let dirs = [[1,0], [-1,0], [0,1], [0,-1]]
 
    while (queue.length) {
        let curr = queue.shift()
        for (let dir of dirs) {
            let r = curr[0] + dir[0]
            let c = curr[1] + dir[1]
            if (r < 0 || r >= rooms.length || c < 0 || c >= rooms[0].length || rooms[r][c] !== 2147483647) continue
            queue.push([r,c])
            rooms[r][c] = rooms[curr[0]][curr[1]] + 1
        }
    }
    return rooms
};


//DFS
var wallsAndGates = function(rooms) {
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                dfs(i, j, 0)
            }
        }
    }
    
    function dfs(i, j, count) {
        if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] < count) return
        
        rooms[i][j] = count
        
        dfs(i+1, j, count+1) 
        dfs(i-1, j, count+1)
        dfs(i, j+1, count+1)
        dfs(i, j-1, count+1)
    }
};