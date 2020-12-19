class Solution {
    rotate = (nums, k) => {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop()) 
        }
        return nums 
    }

}
let obj = new Solution()
console.log(obj.rotate([1,2,3,4,5], 2))