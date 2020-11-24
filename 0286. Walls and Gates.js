
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