class Solution {
    minMoves = (nums) => {
        let moves = 0
        let min = Math.min(...nums)
        nums.forEach(num => {
            if(num > min) {
                moves += num - min
            }
        });

        return moves
    }
}

let obj = new Solution()

console.log(obj.minMoves([1,2,3, 7]))