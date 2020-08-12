class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

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