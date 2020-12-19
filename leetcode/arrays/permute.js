class Solution {
    premute = (nums) => {

        let fullRes = []

        for (let i = 0; i < nums.length; i++) {
            swapOn(i) 
        }

        let swapOn = (index, last) => {
            if (index === nums.length - 1) {
                return 
            }
            let res = [nums[index]]



        }



    }
}

let obj = new Solution()

console.log(obj.premute([1,2,3]))


// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]