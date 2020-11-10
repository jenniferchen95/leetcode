//Time O(n^2 + m)
//Space o(n + m)

function patternMatcher(pattern, string) {
	let xStart = pattern[0] === "x" ? true : false
	let patternArray = []
	if (!xStart) {
		for (let c of pattern) {
			if (c === "x") patternArray.push("y")
			else patternArray.push("x")
		}
	} else {
		for (let c of pattern) {
			patternArray.push(c.toString())
		}
	}
	
	let hash = {}
	let firstY = null
	for (let i = 0; i < patternArray.length; i++) {
		if (patternArray[i] === "y" && firstY === null) firstY = i
		hash[patternArray[i]] = hash[patternArray[i]] || 0
		hash[patternArray[i]]++
	}
	
	let lenX = 1

	while (lenX < string.length) {
		let lenY = (string.length - (hash["x"]*lenX))/hash["y"]
		if (lenY%1 !== 0) lenX++
		let xSubstring = string.substring(0, lenX)
		let ySubstring = string.substring(lenX*firstY, ((lenX*firstY) + lenY))
		let mappedString = ""
		for (let c of patternArray) {
			if (c === "x") mappedString += xSubstring
			else mappedString += ySubstring
		}
		if (mappedString === string) {
			if (xStart) return [xSubstring, ySubstring]
			else return [ySubstring, xSubstring]
		} else {
			lenX++
		} 
	}
	return []
}