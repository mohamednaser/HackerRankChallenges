class Solution {
    getRange = (arr, target) => {
        let firstIndex = arr.indexOf(target)
        if (firstIndex === -1) {
            return [-1, -1] 
        }
        let lastIndex = firstIndex

        for (let i = firstIndex; i < arr.length && arr[i] == target; i++) {
            lastIndex = i
        }

        return [firstIndex, lastIndex]
    }
}

let obj = new Solution()

console.log(obj.getRange([1], 1))