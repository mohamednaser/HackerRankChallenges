class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 

// Binary Search tree class 
class BinarySearchTree 
{ 
    constructor(root) 
    { 
        // root of a binary seach tree 
        this.root = null; 
    }
    
    insert(data) 
    { 
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data); 
        
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === null) 
        this.root = newNode; 
        else
        
        // find the correct position in the  
        // tree and add the node 
        this.insertNode(this.root, newNode); 
    }    
    
    
    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) 
    { 
        // if the data is less than the node 
        // data move left of the tree  
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
            node.left = newNode; 
            else
            
            // if left is not null recurr until  
            // null is found 
            this.insertNode(node.left, newNode);  
        } 
        
        // if the data is more than the node 
        // data move right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null) 
            node.right = newNode; 
            else
            
            // if right is not null recurr until  
            // null is found 
            this.insertNode(node.right,newNode); 
        } 
    }
    
    height = () => {
        
        let heightHelper = (node) => {
            if (!node) {
                return 0
            }
            
            let right =  heightHelper(node.right) 
            
            let left =  heightHelper(node.left) 
            
            return (right > left) ? right + 1 : left + 1
            
        }
        return heightHelper(this.root, 0, 0)
    }
}



var orderTreversal = (root) => {
    let answer = [] 
    
    
    let orderTreversalHelper = (node, level) => {
        if(!node) {
            return
        }
        if (!answer[level]) {
            answer[level] = [] 
        } 

        answer[level].push(node.data)
        
        orderTreversalHelper(node.left, level + 1)
        orderTreversalHelper(node.right, level + 1)
        
    }
    
    orderTreversalHelper(root, 0)
    
    return answer.reverse()
}



var BST = new BinarySearchTree(); 

// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(21); 
BST.insert(16); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(3); 
BST.insert(9); 
BST.insert(27); 

console.log(orderTreversal(BST.root))