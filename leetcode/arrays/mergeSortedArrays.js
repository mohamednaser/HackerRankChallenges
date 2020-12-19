class Solution {
    merge = (nums1, m, nums2, n) => {
        let mergeHelper = (nums1, pointer1, nums2, pointer2) => {
            if (nums2.length == pointer2) {
                return nums1 
            }
            if (nums1[pointer1] < nums2[pointer2]) {
                return mergeHelper(nums1, pointer1 + 1, nums2, pointer2)
            } else {
                nums1.splice(pointer1, 0, nums2[pointer2])
                return mergeHelper(nums1, pointer1 + 1, nums2, pointer2 + 1)
            }
        }
        for (let i = nums1.length-1; i > 0 && nums1.length >= m; i--) {
            if(nums1[i] !== 0) {
                break
            } 
            nums1.pop()
        }        

        return mergeHelper(nums1, 0, nums2, 0)
    }
}

let obj = new Solution()

// let nums1 = [1,2,3, 0, 0, 0]
// let m = 6
// let nums2 = [2, 5,6]
// let n = 3

let nums1 = [-1,-1,0,0,0,0]
let m = 4
let nums2 = [-1,0]
let n = 2

console.log(obj.merge(nums1, m, nums2, n))