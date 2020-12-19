class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
    
    
}

let removeDuplicates = (list) => {
    let prev = list
    let current = list.next

    while (current) {
        if (prev.val == current.val) {
            prev.next = current.next 
        } else {
            prev = current
        } 
        current = current.next
    }

    return list
}


let list = new Node(1)
list.next = new Node(1)
list.next.next = new Node(1)
list.next.next.next = new Node(3)
list.next.next.next.next = new Node(3)
list.next.next.next.next.next = new Node(4)
list.next.next.next.next.next.next = new Node(5)

let res = removeDuplicates(list)

while(res) {
    console.log(res.val)
    res = res.next    
}





