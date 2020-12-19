class BST {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}



/**
* @param {number[]} nums
* @return {TreeNode}
*/
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) {
        return 
    }
    let mid = Math.floor((nums.length) / 2) 
    let root = new BST(nums[mid])

    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1, nums.length))
     
    return root
};


console.log(sortedArrayToBST([-10,-3,0,5,9]))