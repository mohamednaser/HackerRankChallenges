class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function sumLinkedList(l1, l2) {
    function sumLinkedListHelper(l1, l2, c) {
        let res = l1.value + l2.value + c
        
        c = res > 9 ? 1 : 0 
        
        let ret = new Node(res % 10) 
        
        if (l1.next || l2.next) {
            
            if (!l1.next) {
                l1.next = new Node(0) 
            }
            
            if (!l2.next) {
                l2.next = new Node(0) 
            }
            
            ret.next = sumLinkedListHelper(l1.next, l2.next, c)
        }
        
        return ret
    }
    
    return sumLinkedListHelper(l1, l2, 0)
}


function sumLinkedListIterative(l1, l2) {
    let a = l1
    let b = l2
    let c = 0 
   
    let ret = current = null
    
    while (true) {
        
        let val = a.value + b.value + c
        c = val > 9 ? 1 : 0 
        if (current == null) {
            ret = current = new Node(val%10) 
        } else {
            current.next = new Node(val%10)
            current = current.next
        }
       
        if (a.next == null && b.next == null) {
            break 
        }
       
        if (!a.next || !b.next) {
         
            if (!a.next) {
                a.next = new Node(0) 
            }
        
            if (!b.next) {
                b.next = new Node(0) 
            }   
        }
        
        
        a = a.next
        b = b.next

        
    }
    return ret
}

let l1 = new Node(1)
l1.next = new Node(4)
l1.next.next = new Node(3)

let l2 = new Node(5)
l2.next = new Node(6)
l2.next.next = new Node(4)

let answer = sumLinkedList(l1, l2) 
let iterative = sumLinkedListIterative(l1, l2) 
console.log(answer)
console.log(iterative)
