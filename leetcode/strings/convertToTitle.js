class Solution {
    convertToString = (n) => {
        let dic = {
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H',
            9: 'I',
            10: 'J',
            11: 'K',
            12: 'L',
            13: 'M',
            14: 'N',
            15: 'O',
            16: 'P',
            17: 'Q',
            18: 'R',
            19: 'S',
            20: 'T',
            21: 'U',
            22: 'V',
            23: 'W',
            24: 'X',
            25: 'Y',
            26: 'Z',   
        }

        let res = '';
        
        let convertToStringHelper = (n) => {
            if(n <= 26) {
                res += dic[n]
                return
            }            
            
            let rem = n % 26

            if (rem === 0) {
                res += 'Z'
                convertToStringHelper(Math.floor(n / 26) - 1)                
            } else {
                res += dic[rem]
                convertToStringHelper(Math.floor(n / 26))                
            }
        }

        convertToStringHelper(n)
        return res.split("").reverse().join("")

    }
}

let obj = new Solution()

// console.log(obj.convertToString(26))
// console.log(obj.convertToString(27))
// console.log(obj.convertToString(51))
// console.log(obj.convertToString(52))
// console.log(obj.convertToString(80))
// console.log(obj.convertToString(676))
// console.log(obj.convertToString(702))
// console.log(obj.convertToString(705))
console.log(obj.convertToString(24568))
