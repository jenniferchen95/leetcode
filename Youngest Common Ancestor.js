class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

//1) Optimized Space
//Time O(d) - d is depth (height) of tree
//Space O(1)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let one = getDepth(descendantOne)
    let two = getDepth(descendantTwo)
    if (one > two) {
        while (one > two) {
            one--
            descendantOne = descendantOne.ancestor
        }
    }
    if (two > one) {
        while (two > one) {
            two--
            descendantTwo = descendantTwo.ancestor
        }
    }
    while (descendantOne !== descendantTwo) {
        descendantOne = descendantOne.ancestor
        descendantTwo = descendantTwo.ancestor
    }
    return descendantOne
    
    function getDepth(descendant) {
        let depth = 0
        while (descendant.ancestor) {
            depth++
            descendant = descendant.ancestor
        }
        return depth
    }
}

//2) Trading Space for Time
//Time O(D1 + D2) - where D1 is distance from LCA to first node 
//Space O(D1 + D2)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let set = new Set()
      while (descendantOne || descendantTwo) {
          if (set.has(descendantOne)) return descendantOne
          if (set.has(descendantTwo)) return descendantTwo
  
          if (descendantOne && !set.has(descendantOne)) {
              set.add(descendantOne)
              descendantOne = descendantOne.ancestor
          }
          if (descendantTwo && !set.has(descendantTwo)) {
              set.add(descendantTwo) 
              descendantTwo = descendantTwo.ancestor
          }
      }
  }



//3)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let oneList = getAncestors(descendantOne)
    let twoList = getAncestors(descendantTwo)
    if (!oneList || !twoList) return topAncestor
    
    function getAncestors(descendant) {
        let queue = [descendant]
        let ancestorList = []
        while (queue.length) {
            let curr = queue.shift()
            ancestorList.push(curr)
            if (curr.ancestor) queue.push(curr.ancestor)
        }
        return ancestorList
    }
    let i = 0
    let j = 0
    while (oneList.length - i > twoList.length-j) {
        i++
    }
    while (oneList.length - i < twoList.length-j) {
        j++
    }
    
    while (oneList[i] !== twoList[j]) {
        i++
        j++
    }
    return oneList[i]
}
