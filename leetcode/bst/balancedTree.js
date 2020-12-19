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
    constructor() 
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
}

let balancedTree = (node) => {
    let maxRight = 0
    let maxLeft = 0
    
    let maxLevel = (node, level, isRight) => {
        if(!node) return 0
        if (isLeaf(node)) {
            if (isRight) {
                if (level > maxRight) {
                    maxRight = level 
                }   
            } else {
                if (level > maxLeft) {
                    maxLeft = level 
                }
            }
            
        }
        
        maxLevel(node.left, level + 1, isRight)
        maxLevel(node.right, level + 1, isRight)
    }
    
    maxLevel(node.right, 1, true) 
    maxLevel(node.left, 1, false)
    
    return (maxLeft == maxRight) || (maxRight - maxLeft == 1) || (maxRight - maxLeft == -1) 
}

let isLeaf = (node) => {
    return !node.right && !node.left
}

var BST = new BinarySearchTree(); 

BST.insert(2); 
BST.insert(1); 
BST.insert(3); 
// BST.insert(4); 
// BST.insert(5); 


console.log(balancedTree(BST.root))
