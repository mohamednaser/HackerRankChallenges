class Solution {
    findTheDiff = (s, t) => {
        let obj1 = {}
        let obj2 = {}

        for (let i = 0; i < s.length; i++) {
            obj1[s[i]] = obj1[s[i]] ? ++obj1[s[i]] : 1
        }

        for (let j = 0; j < t.length; j++) {
            obj2[t[j]] = obj2[t[j]] ? ++obj2[t[j]] : 1
        }

        for (const key in obj2) {
            if (!obj1[key] || obj2[key] > obj1[key]) {
                return key 
            }
        }

        return -1
    }
}

let obj = new Solution()

console.log(obj.findTheDiff('a', 'aa'))