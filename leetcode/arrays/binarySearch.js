class Solution {
    binarySearch = (arr, target) => {
        let binarySearchHelper = (arr, min, max, target) => {
            if (min > max) {
                return -1 
            }
            
            let mid = Math.ceil(min + (max - min) / 2)
           
            if(arr[mid] == target) {
                return mid
            }
            
            if (arr[mid] > target) {
                return binarySearchHelper(arr, min, mid - 1, target)                
            } else {
                return binarySearchHelper(arr, mid + 1, max, target)                
            }
        }
        
        return binarySearchHelper(arr, 0, arr.length - 1, target)
    }

    binarySearchIterative = (arr, target) => {
        let max = arr.length
        let min = 0

        while(true) {
           
            if (min > max) {
               return -1 
            }

            let mid = Math.ceil(min + (max-min) / 2)

            if(arr[mid] == target) {
                return mid
            }

            if(arr[mid] > target) {
                max = mid - 1
            } else {
                min = mid + 1
            }
        }
    }
}

let obj = new Solution()
console.log(obj.binarySearch([1, 3, 3, 5, 7, 8, 9, 9, 15], 8))
console.log(obj.binarySearchIterative([1, 3, 3, 5, 7, 8, 9, 9, 15], 8))