//Time O(n^2)
//Space O(n)

function diskStacking(disks) {
    disks.sort((a,b) => a[2]-b[2])
      let heights = disks.map(disks => disks[2])
      let dp = new Array(disks.length)
      let maxHeightIdx = 0
      for (let i = 1; i < disks.length; i++) {
          let currDisk = disks[i]
          for (let j = 0; j < i; j++) {
              let prevDisk = disks[j]
              if (canStack(prevDisk, currDisk)) {
                  if (heights[i] <= currDisk[2] + heights[j]) {
                      heights[i] = currDisk[2] + heights[j]
                      dp[i] = j
                  }
              }
          }
          if (heights[i] >= heights[maxHeightIdx]) {
              maxHeightIdx = i
          }
      }
      return buildSequence(disks, dp, maxHeightIdx)
  }
  function canStack(o, c) {
      return o[0] < c[0] && o[1] < c[1] && o[2] < c[2]
  }
  
  function buildSequence(array, dp, currIdx) {
      const seq = []
      while (currIdx !== undefined) {
          seq.unshift(array[currIdx])
          currIdx = dp[currIdx]
      }
      return seq
  }