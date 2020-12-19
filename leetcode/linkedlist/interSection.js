class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

let interSection = (headA, headB) => {
    if (!headA || !headB) {
        return null 
    }
    
    let obj = {}
    let pointer1 = headA
    let pointer2 = headB
    
    while(pointer1 || pointer2) {
        if(obj[pointer1]){
            return obj[pointer1] 
        } else {
            obj[pointer1] = pointer1.val 
        }
        
        if(obj[pointer2]) {
        console.log(pointer2.val)
            return obj[pointer2]
        } else {
            obj[pointer2] = pointer2.val  
        }
       
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    
    return null
    
}

let node1 = new Node(4)
node1.next = new Node(1)
node1.next.next = new Node(8)
node1.next.next.next = new Node(4)
node1.next.next.next.next = new Node(5)

let node2 = new Node(5)
node2.next = new Node(0)
node2.next.next = new Node(1)
node2.next.next.next = new Node(8)
node2.next.next.next.next = new Node(4)
node2.next.next.next.next.next = new Node(5)

console.log(interSection(node1, node2))