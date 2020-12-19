class Solution {
    addStrings = (num1, num2) => {
        let res = ''
        
        let addStringsHelper = (pointer1, pointer2, remain) => {
            console.log(pointer1)
            if (pointer1 < 0 && pointer2 < 0) {
                if (remain === 1) {
                    res += '1' 
                }
                return 
            }
            
            let val1 = (pointer1 >= 0) ? num1[pointer1] : 0 
            let val2 = (pointer2 >= 0) ? num2[pointer2] : 0
            
            let equ = parseInt(val1) + parseInt(val2) + remain
            
            if (equ > 9) {
                res += equ - 10 
                addStringsHelper(pointer1 - 1, pointer2 - 1, 1)
            } else {
                res += equ
                addStringsHelper(pointer1 - 1, pointer2 - 1, 0)
            }
            
        }
        
        addStringsHelper(num1.length - 1, num2.length - 1, 0)
        
        return res.split("").reverse().join("")
    }
}

let obj = new Solution()

console.log(obj.addStrings('9', '1'))