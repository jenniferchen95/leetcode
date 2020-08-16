//BuildHeap O(n)
//SiftDown O(log(n))
//SiftUp O(log(n))
//Space O(1)

class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
  
    buildHeap(array) {
        let firstParentIdx = Math.floor((array.length-2) / 2)
          for (let i = firstParentIdx; i >= 0; i--) {
              this.siftDown(i, array.length-1, array)
          }
          return array
    }
  
    siftDown(currIdx, endIdx, heap) {
          let childOneIdx = 2*currIdx+1
          while (childOneIdx <= endIdx) {
              let childTwoIdx = 2*currIdx+2 <= endIdx ? 2*currIdx+2 : -1
              let idxToSwap 
              if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                  idxToSwap = childTwoIdx
              } else {
                  idxToSwap = childOneIdx
              }
              if (heap[idxToSwap] < heap[currIdx]) {
                  this.swap(idxToSwap, currIdx, heap)
                  currIdx = idxToSwap
                  childOneIdx = 2 * currIdx+1
              } else {
                  break
              }
          }
    }
  
    siftUp(currIdx, heap) {
      let parentIdx = Math.floor((currIdx-1) /2)
          while (currIdx >= 0 && heap[currIdx] < heap[parentIdx]) {
              this.swap(currIdx, parentIdx, heap)
              currIdx = parentIdx
              parentIdx = Math.floor((currIdx-1)/2)
          }
    }
  
    peek() {
          return this.heap[0]
    }
  
    remove() {
      this.swap(0, this.heap.length-1, this.heap)
          let valueToRemove = this.heap.pop()
          this.siftDown(0, this.heap.length-1, this.heap)
          return valueToRemove
    }
  
    insert(value) {
      this.heap.push(value)
          this.siftUp(this.heap.length-1, this.heap)
    }
      
      swap(i, j, heap) {
          let temp = heap[i]
          heap[i] = heap[j]
          heap[j] = temp
      }
  }
