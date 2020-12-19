class Solution {
    factorialTrailingZeros = (n) => {
        let res = 0

        for (let i = 5; i <= n; i*=5) {
            res += Math.floor(n / i) 
        }

        return res
    }
}

let obj = new Solution()
console.log(obj.factorialTrailingZeros(3)) // 0
console.log(obj.factorialTrailingZeros(5)) // 1
console.log(obj.factorialTrailingZeros(10)) // 2
console.log(obj.factorialTrailingZeros(15)) // 2
console.log(obj.factorialTrailingZeros(30)) // 7 