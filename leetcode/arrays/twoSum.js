let twoSum = (nums, target) => {
    let hash = {}
    
    for (const key in nums) {
        if(hash[target - nums[key]]) {
            return [hash[target-nums[key]], key]
        } 
        hash[nums[key]] = key
    }
}

console.log(twoSum([2, 7, 11, 15], 26))