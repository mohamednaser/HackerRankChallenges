class Solution {

    generate = (num) => {
        num += 1
        let res = []
       
        res.push([1])   

        for (let i = 1; i < num; i++) {
            let latestRes = res[res.length - 1]
            
            let minRes = []

            for (let j = 0; j <= latestRes.length; j++) {
                if (j === 0 || j === latestRes.length) {
                    minRes.push(1) 
                } else {
                    minRes.push(latestRes[j] + latestRes[j-1]) 
                }
            }

            res.push(minRes)
        }
       
        
        return res[res.length - 1]

    }

}

let obj = new Solution()
console.log(obj.generate(3))