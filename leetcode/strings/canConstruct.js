let canConstruct = (letters, magazine) => {
    if(letters.length > magazine.length) {
        return false
    }

    let map = {}

    for (let i = 0; i < magazine.length; i++) {
        map[magazine[i]] =  map[magazine[i]] == null ? 1 : ++map[magazine[i]]
    }

    for (let k = 0; k < letters.length; k++) {
        if (map[letters[k]] == null) {
            return false 
        } 
        map[letters[k]] == 1 ? delete map[letters[k]] : --map[letters[k]]
    }

    return true
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('abcc', 'aabbccc'))