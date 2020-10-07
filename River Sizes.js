//Time O(n*m)
//Space O(n*m)
function riverSizes(matrix) {
    let res = []
      let count = 0
      
      for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[0].length; j++) {
              if (matrix[i][j] === 1) {
                  dfs(i, j)
                  res.push(count)
                  count = 0
              }
          }
      }
      return res
      
      function dfs(i, j) {
          if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || matrix[i][j] !== 1 || matrix[i][j] === 0) return
          matrix[i][j] = "#"
          count++
          dfs(i+1, j)
          dfs(i-1, j)
          dfs(i, j+1)
          dfs(i, j-1)
      }
  }