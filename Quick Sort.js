//Time average O(n*logn), worst O(n^2)
//Space O(logn) - call stack

function quickSort(array) {
	quickSortHelper(0, array.length-1)
	return array;
	
	function quickSortHelper(startIdx, endIdx) {
		if (startIdx >= endIdx) return;

		let pivotIdx = startIdx
		let leftIdx = startIdx + 1
		let rightIdx = endIdx
		
		while (rightIdx >= leftIdx) {
			if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
				swap(leftIdx, rightIdx) 
			} 
			if (array[leftIdx] <= array[pivotIdx]) leftIdx++
			if (array[rightIdx] >= array[pivotIdx]) rightIdx--
		}
		swap(pivotIdx, rightIdx)
		let leftSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
		if (leftSmaller) {
			quickSortHelper(startIdx, rightIdx-1)
			quickSortHelper(rightIdx+1, endIdx)
		} else {
			quickSortHelper(rightIdx+1, endIdx)
			quickSortHelper(startIdx, rightIdx-1)
		}
	}
	
	function swap(i, j) {
		let temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
}