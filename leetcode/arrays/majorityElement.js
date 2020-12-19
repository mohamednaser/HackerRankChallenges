class Solution {
    majorityElement = (nums) => {
        let obj = {}
        let max = 0
        nums.forEach((num) => {
            let count = obj[num] = ++obj[num] || 1
            
            if (count > nums.length / 2) {
                max = num
            }
        })
        return max
    }
}

let obj = new Solution()
console.log(obj.majorityElement([2,2,1,1,1,2,2]))