/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counter = {}
    
    for(let i = 0; i < nums.length; i++) {
        counter[nums[i]] = counter[nums[i]] ? counter[nums[i]] + 1 : 1
    }
    
    for(key in counter) {
        if (counter[key] === 1) return key
    }
};

console.log(singleNumber([1,2,2]))